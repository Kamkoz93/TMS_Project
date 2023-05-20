import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { EmployeeModel } from 'src/app/models/employee.model';
import { Observable, combineLatest, map, switchMap } from 'rxjs';
import { TeamsService } from 'src/app/services/teams.service';
import { TeamModel } from 'src/app/models/team.model';
import { ProjectModel } from 'src/app/models/project.model';
import { ProjectsService } from 'src/app/services/projects.service';

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
    private _projectsService: ProjectsService
  ) {}

  readonly employeeList$: Observable<EmployeeModel[]> =
    this._employeesService.getAll();

  readonly projectsList$: Observable<ProjectModel[]> =
    this._projectsService.getAll();

  readonly teamsList$: Observable<TeamModel[]> = this._teamsService.getAll();

  readonly employeeDetails$: Observable<EmployeeModel> =
    this._activatedRoute.params.pipe(
      switchMap((params) => {
        return this._employeesService.getOne(params['id']);
      })
    );
  readonly teamsWithEmployee$: Observable<TeamModel[]> = combineLatest([
    this.teamsList$,
    this.employeeDetails$,
  ]).pipe(
    map(([teams, employee]: [TeamModel[], EmployeeModel]) => {
      return teams.filter((team: TeamModel) =>
        team.members.some((member) => member.id === employee.id)
      );
    })
  );
  readonly projectsWithEmployee$: Observable<ProjectModel[]> = combineLatest([
    this.projectsList$,
    this.employeeDetails$,
  ]).pipe(
    map(([projects, employee]: [ProjectModel[], EmployeeModel]) => {
      return projects.filter((project: ProjectModel) =>
        project.assignees.some((member) => member.id === employee.id)
      );
    })
  );
}
