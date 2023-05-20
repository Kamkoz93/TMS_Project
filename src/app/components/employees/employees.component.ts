import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';
import { EmployeeModel } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
  readonly employeeList$: Observable<EmployeeModel[]> =
    this._employeesService.getAll();

  constructor(private _employeesService: EmployeesService) {}
}
