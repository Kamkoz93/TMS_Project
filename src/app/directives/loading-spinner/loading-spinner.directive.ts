import {
  Directive,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Directive({
  selector: '[appLoadingSpinner]',
})
export class LoadingSpinnerDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.isLoading$.subscribe((isLoading) => {
      if (isLoading) {
        this.viewContainerRef.clear();
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
