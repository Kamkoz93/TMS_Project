import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContentComponentModule } from '../card/card-content.component-module';
import { ListElementComponentModule } from '../list-element/list-element.component-module';
import { TeamsComponent } from './teams.component';
import { PointerOnHoverDirectiveModule } from 'src/app/directives/pointer-on-hover/pointer-on-hover.directive-module';
import { LoaderComponentModule } from '../loader/loader.component-module';
import { LoadingSpinnerDirectiveModule } from 'src/app/directives/loading-spinner/loading-spinner.directive-module';

@NgModule({
  imports: [
    CommonModule,
    CardContentComponentModule,
    ListElementComponentModule,
    PointerOnHoverDirectiveModule,
    LoaderComponentModule,
    LoadingSpinnerDirectiveModule,
  ],
  declarations: [TeamsComponent],
  providers: [],
  exports: [TeamsComponent],
})
export class TeamsComponentModule {}
