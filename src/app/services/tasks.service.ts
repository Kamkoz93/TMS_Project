import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { CheckListItemModel } from '../models/check-list-item.model';
import { MappedTaskQueryModel } from '../queries/mapped-task.query-model';
import { EmployeesService } from './employees.service';
import { EmployeeModel } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(
    private _httpClient: HttpClient,
    private _employeeService: EmployeesService
  ) {}
  getAll(): Observable<TaskModel[]> {
    return this._httpClient.get<TaskModel[]>(
      'https://63810e439440b61b0d10b7c7.mockapi.io/tasks'
    );
  }

  getChecklistItems(): Observable<CheckListItemModel[]> {
    return this._httpClient.get<CheckListItemModel[]>(
      'https://63810e439440b61b0d10b7c7.mockapi.io/checklist-items'
    );
  }

  private mapChecklistItems(
    checklistItems: CheckListItemModel[],
    task: TaskModel
  ): CheckListItemModel[] {
    return task.checkList
      .map((checklistId) => {
        const checklistItem = checklistItems.find(
          (item) => item.id === checklistId
        );

        if (checklistItem) {
          return {
            id: checklistItem.id,
            name: checklistItem.name,
            isDone: checklistItem.isDone,
          };
        }

        return null;
      })
      .filter(Boolean) as CheckListItemModel[];
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
