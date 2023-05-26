import { NgModule } from '@angular/core';
import { ListElementComponent } from './list-element.component';
import { RouterModule } from '@angular/router';
import { ProgressBarComponentModule } from '../progress-bar/progress-bar.component-module';

@NgModule({
  imports: [RouterModule, ProgressBarComponentModule],
  declarations: [ListElementComponent],
  providers: [],
  exports: [ListElementComponent],
})
export class ListElementComponentModule {}
