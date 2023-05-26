import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { ProjectModel } from '../models/project.model';
import { API_ROUTES_DEF } from '../configuration/routes-definition';
import { TasksService } from './tasks.service';
import { MappedTaskQueryModel } from '../queries/mapped-task.query-model';
import { ProjectWithTasksQueryModel } from '../queries/project-with-tasks.query-model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(
    private _httpClient: HttpClient,
    private _tasksService: TasksService
  ) {}

  getAll(): Observable<ProjectModel[]> {
    return this._httpClient.get<ProjectModel[]>(API_ROUTES_DEF.PROJECTS);
  }

  getMapedProjectsWithTasks(): Observable<ProjectWithTasksQueryModel[]> {
    return combineLatest([
      this.getAll(),
      this._tasksService.getFullTasksList(),
    ]).pipe(
      map(([projects, tasks]: [ProjectModel[], MappedTaskQueryModel[]]) => {
        return projects.map((project) => {
          const mappedTasks = tasks
            .filter((task) => task.projectId === project.id)
            .flatMap((task) =>
              task.checkList.map((checkListItem) => ({
                id: checkListItem.id,
                name: checkListItem.name,
                isDone: checkListItem.isDone,
              }))
            );

          return {
            ...project,
            tasks: mappedTasks,
          };
        });
      })
    );
  }
}
