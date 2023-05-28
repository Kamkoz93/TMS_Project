import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  constructor() {}

  private _isLoadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  public isLoading$: Observable<boolean> =
    this._isLoadingSubject.asObservable();

  show(): void {
    this._isLoadingSubject.next(true);
  }

  hide(): void {
    this._isLoadingSubject.next(false);
  }
}
