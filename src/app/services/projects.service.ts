import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectModel } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private _httpClient: HttpClient) {}
  getAll(): Observable<ProjectModel[]> {
    return this._httpClient.get<ProjectModel[]>(
      'https://6384fca14ce192ac60696c4b.mockapi.io/projects'
    );
  }
}
