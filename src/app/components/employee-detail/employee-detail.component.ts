import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest, map, shareReplay, switchMap } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';
import { TeamsService } from '../../services/teams.service';
import { ProjectsService } from '../../services/projects.service';
import { TasksService } from '../../services/tasks.service';
import { ProjectModel } from '../../models/project.model';
import { TeamModel } from '../../models/team.model';
import { EmployeeModel } from '../../models/employee.model';
import { ProjectWithTasksQueryModel } from 'src/app/queries/project-with-tasks.query-model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailComponent {
  constructor(
    private _employeesService: EmployeesService,
    private _activatedRoute: ActivatedRoute,
    private _teamsService: TeamsService,
    private _projectsService: ProjectsService,
    private _tasksService: TasksService
  ) {}

  readonly pageParams$: Observable<string> = this._activatedRoute.params.pipe(
    map((params) => params['id'])
  );

  readonly projectsListWithMapeedTasks$: Observable<
    ProjectWithTasksQueryModel[]
  > = this._projectsService.getMapedProjectsWithTasks();

  readonly employeeDetails$: Observable<EmployeeModel> = this.pageParams$.pipe(
    switchMap((id) => {
      return this._employeesService.getOne(id);
    }),
    shareReplay(1)
  );

  readonly currentEmployeeTeams$: Observable<TeamModel[]> = combineLatest([
    this._teamsService.getAll(),
    this.employeeDetails$,
  ]).pipe(
    map(([teams, employee]: [TeamModel[], EmployeeModel]) =>
      teams.filter((team: TeamModel) =>
        team.members.some((member) => member.id === employee.id)
      )
    )
  );

  readonly projectsWithCurrentEmployee$: Observable<
    ProjectWithTasksQueryModel[]
  > = combineLatest([
    this.projectsListWithMapeedTasks$,
    this.employeeDetails$,
  ]).pipe(
    map(([projects, employee]: [ProjectWithTasksQueryModel[], EmployeeModel]) =>
      projects.filter((project: ProjectModel) =>
        project.assignees.some((member) => member.id === employee.id)
      )
    )
  );
}
