import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';
import { CheckListItemModel } from '../models/check-list-item.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private _httpClient: HttpClient) {}
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
}
