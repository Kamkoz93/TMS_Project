import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { CheckListItemModel } from 'src/app/models/check-list-item.model';
import { EmployeeModel } from 'src/app/models/employee.model';
import { TaskModel } from 'src/app/models/task.model';
import { MappedTaskQueryModel } from 'src/app/queries/mapped-task.query-model';
import { EmployeesService } from 'src/app/services/employees.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  constructor(
    private _tasksService: TasksService,
    private _employeesService: EmployeesService
  ) {}
  readonly tasksList$: Observable<TaskModel[]> = this._tasksService.getAll();

  readonly checklistItemsList$: Observable<CheckListItemModel[]> =
    this._tasksService.getChecklistItems();

  readonly fullTasksList$: Observable<MappedTaskQueryModel[]> =
    this._tasksService.getFullTasksList();

  readonly employeeList$: Observable<EmployeeModel[]> =
    this._employeesService.getAll();

  public getCountOfIsDone(data: CheckListItemModel[]): number {
    return data.filter((item) => item.isDone === true).length;
  }
}
