import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ListElementComponentModule } from '../list-element/list-element.component-module';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';
import { CardContentComponentModule } from '../card/card-content.component-module';
import { CommonModule } from '@angular/common';
import { PointerOnHoverDirectiveModule } from 'src/app/directives/pointer-on-hover/pointer-on-hover.directive-module';

@NgModule({
  imports: [
    CommonModule,
    ListElementComponentModule,
    AvatarCardComponentModule,
    CardContentComponentModule,
    PointerOnHoverDirectiveModule,
  ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent],
})
export class HomeComponentModule {}
