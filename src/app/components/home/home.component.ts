import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { TeamModel } from 'src/app/models/team.model';
import { AvatarCardQueryModel } from 'src/app/queries/avatar-card.query-model';
import { EmployeesService } from 'src/app/services/employees.service';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly teamsList$: Observable<TeamModel[]> = this._teamsService.getAll();

  readonly employeeList$: Observable<AvatarCardQueryModel[]> =
    this._employeesService.getAll().pipe(
      map((employees) =>
        employees.map((employee) => ({
          fullName: `${employee.firstName} ${employee.lastName}`,
          avatarUrl: employee.avatarUrl,
          position: employee.position,
        }))
      )
    );

  constructor(
    private _employeesService: EmployeesService,
    private _teamsService: TeamsService
  ) {}
}
