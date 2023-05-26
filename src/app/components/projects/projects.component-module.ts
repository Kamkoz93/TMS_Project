import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { DueDatePipeModule } from 'src/app/pipes/due-date/due-date.pipe-module';
import { DaysLeftPipeModule } from 'src/app/pipes/days-left/days-left.pipe-module';
import { ListElementComponentModule } from '../list-element/list-element.component-module';
import { CardContentComponentModule } from '../card/card-content.component-module';

@NgModule({
  imports: [
    CommonModule,
    DueDatePipeModule,
    ListElementComponentModule,
    CardContentComponentModule,
  ],
  declarations: [ProjectsComponent],
  providers: [],
  exports: [],
})
export class ProjectsComponentModule {}
