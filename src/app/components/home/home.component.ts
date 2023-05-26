import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from 'src/app/models/employee.model';
import { TeamModel } from 'src/app/models/team.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { TeamsService } from 'src/app/services/teams.service';
import { ROUTES_DEF } from 'src/app/configuration/routes-definition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor(
    private _employeesService: EmployeesService,
    private _teamsService: TeamsService
  ) {}

  readonly urlRoutes = ROUTES_DEF;

  readonly teamsList$: Observable<TeamModel[]> = this._teamsService.getAll();

  readonly employeeList$: Observable<EmployeeModel[]> =
    this._employeesService.getAll();
}
