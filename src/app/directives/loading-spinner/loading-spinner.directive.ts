import {
  Directive,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Directive({
  selector: '[appLoadingSpinner]',
})
export class LoadingSpinnerDirective implements OnInit, OnDestroy {
  private readonly _destroySubject: Subject<void> = new Subject<void>();

  public destroy$: Observable<void> = this._destroySubject.asObservable();

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.isLoading$
      .pipe(takeUntil(this._destroySubject.asObservable()))
      .subscribe((isLoading) => {
        if (isLoading) {
          this.viewContainerRef.clear();
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainerRef.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
}
