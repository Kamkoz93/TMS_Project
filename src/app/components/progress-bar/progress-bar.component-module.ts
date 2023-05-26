import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';
import { ProgressBarDirectiveModule } from 'src/app/directives/progress-bar/progress-bar.directive-module';

@NgModule({
  imports: [ProgressBarDirectiveModule],
  declarations: [ProgressBarComponent],
  providers: [],
  exports: [ProgressBarComponent],
})
export class ProgressBarComponentModule {}
