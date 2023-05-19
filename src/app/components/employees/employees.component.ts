import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';
import { AvatarCardQueryModel } from 'src/app/queries/avatar-card.query-model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
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

  constructor(private _employeesService: EmployeesService) {}
}
