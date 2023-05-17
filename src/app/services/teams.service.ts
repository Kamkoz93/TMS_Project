import { Injectable } from '@angular/core';
import { TeamModel } from '../models/team.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  constructor(private _httpClient: HttpClient) {}
  getAll(): Observable<TeamModel[]> {
    return this._httpClient.get<TeamModel[]>(
      'https://6384fca14ce192ac60696c4b.mockapi.io/teams'
    );
  }
}
