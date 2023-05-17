import { NgModule } from '@angular/core';
import { TeamsComponent } from './teams.component';
import { CardComponent } from '../card/card-content.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { ListElementComponent } from '../list-element/list-element.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TeamsComponent,
    CardComponent,
    NavbarComponent,
    ListElementComponent,
  ],
  providers: [],
  exports: [TeamsComponent],
})
export class TeamsComponentModule {}
