import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from '../models/project.model';
import { API_ROUTES_DEF } from '../configuration/routes-definition';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private _httpClient: HttpClient) {}
  getAll(): Observable<ProjectModel[]> {
    return this._httpClient.get<ProjectModel[]>(API_ROUTES_DEF.PROJECTS);
  }
}
