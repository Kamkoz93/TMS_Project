import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';
import { EmployeeModel } from 'src/app/models/employee.model';
import { ROUTES_DEF } from 'src/app/configuration/routes-definition';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
  constructor(private _employeesService: EmployeesService) {}

  readonly urlRoutes = ROUTES_DEF;

  readonly employeeList$: Observable<EmployeeModel[]> =
    this._employeesService.getAll();
}
