import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, shareReplay, tap } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';
import { API_ROUTES_DEF } from '../configuration/routes-definition';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>(API_ROUTES_DEF.EMPLOYEES);
  }

  getOne(id: string): Observable<EmployeeModel> {
    return this.getAll().pipe(
      map((employees) => employees.filter((emp) => emp.id === id)[0]),
      tap((emp) => {
        if (!emp) {
          throw new Error('Employee not found');
        }
      })
    );
  }
}
