import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { EmployeeModel } from '../../models/employee.model';
import { ROUTES_DEF } from 'src/app/configuration/routes-definition';

@Component({
  selector: 'app-mini-avatar-list',
  templateUrl: './mini-avatar-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniAvatarListComponent {
  @Input() data: EmployeeModel[] | null = [];

  readonly urlRoutes = ROUTES_DEF;
}
