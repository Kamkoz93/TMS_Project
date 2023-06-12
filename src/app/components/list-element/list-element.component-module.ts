import { NgModule } from '@angular/core';
import { ListElementComponent } from './list-element.component';
import { RouterModule } from '@angular/router';
import { ProgressBarComponentModule } from '../progress-bar/progress-bar.component-module';
import { PointerOnHoverDirectiveModule } from 'src/app/directives/pointer-on-hover/pointer-on-hover.directive-module';

@NgModule({
  imports: [
    RouterModule,
    ProgressBarComponentModule,
    PointerOnHoverDirectiveModule,
  ],
  declarations: [ListElementComponent],
  providers: [],
  exports: [ListElementComponent],
})
export class ListElementComponentModule {}
