import { Injectable } from '@angular/core';
import { TeamModel } from '../models/team.model';
import { Observable, combineLatest, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ROUTES_DEF } from '../configuration/routes-definition';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<TeamModel[]> {
    return this._httpClient.get<TeamModel[]>(API_ROUTES_DEF.TEAMS);
  }

  getOne(id: string): Observable<TeamModel> {
    return this.getAll().pipe(
      map((teams) => teams.filter((team) => team.id === id)[0]),
      tap((team) => {
        if (!team) {
          throw new Error('Team not found');
        }
      })
    );
  }
}
