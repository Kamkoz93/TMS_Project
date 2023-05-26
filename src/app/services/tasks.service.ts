import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { CheckListItemModel } from '../models/check-list-item.model';
import { MappedTaskQueryModel } from '../queries/mapped-task.query-model';
import { EmployeesService } from './employees.service';
import { EmployeeModel } from '../models/employee.model';
import { API_ROUTES_DEF } from '../configuration/routes-definition';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(
    private _httpClient: HttpClient,
    private _employeeService: EmployeesService
  ) {}

  getAll(): Observable<TaskModel[]> {
    return this._httpClient.get<TaskModel[]>(API_ROUTES_DEF.TASKS);
  }

  getChecklistItems(): Observable<CheckListItemModel[]> {
    return this._httpClient.get<CheckListItemModel[]>(
      API_ROUTES_DEF.CHECKLIST_ITEMS
    );
  }

  private mapChecklistItems(
    checklistItems: CheckListItemModel[],
    task: TaskModel
  ): CheckListItemModel[] {
    return task.checkList.reduce(
      (mappedItems: CheckListItemModel[], checklistId: string) => {
        const checklistItem = checklistItems.find(
          (item) => item.id === checklistId
        );

        if (checklistItem) {
          mappedItems.push({
            id: checklistItem.id,
            name: checklistItem.name,
            isDone: checklistItem.isDone,
          });
        }

        return mappedItems;
      },
      []
    );
  }

  private calculateProgress(checkList: CheckListItemModel[]): number {
    const completedChecklists = checkList.filter(
      (item) => item.isDone === true
    );
    return Math.round((completedChecklists.length / checkList.length) * 100);
  }

  private filterAssignees(
    assigneeIds: string[],
    employees: EmployeeModel[]
  ): EmployeeModel[] {
    return employees.filter((employee: EmployeeModel) =>
      assigneeIds.includes(employee.id)
    );
  }

  public getFullTasksList(): Observable<MappedTaskQueryModel[]> {
    return combineLatest([
      this.getChecklistItems(),
      this.getAll(),
      this._employeeService.getAll(),
    ]).pipe(
      map(
        ([checklistItems, tasks, employees]: [
          CheckListItemModel[],
          TaskModel[],
          EmployeeModel[]
        ]) => {
          return tasks.map((task) => {
            const checkList = this.mapChecklistItems(checklistItems, task);
            const progress = this.calculateProgress(checkList);
            const assignees = this.filterAssignees(task.assigneeIds, employees);

            return {
              ...task,
              checkList,
              tasksProgress: progress,
              assignees,
            };
          });
        }
      )
    );
  }
}
