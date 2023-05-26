import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardContentComponentModule } from '../card/card-content.component-module';
import { ListElementComponentModule } from '../list-element/list-element.component-module';
import { TeamsComponent } from './teams.component';
import { PointerOnHoverDirectiveModule } from 'src/app/directives/pointer-on-hover/pointer-on-hover.directive-module';

@NgModule({
  imports: [
    CommonModule,
    CardContentComponentModule,
    ListElementComponentModule,
    PointerOnHoverDirectiveModule,
  ],
  declarations: [TeamsComponent],
  providers: [],
  exports: [TeamsComponent],
})
export class TeamsComponentModule {}
