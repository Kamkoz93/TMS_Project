import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { DueDatePipeModule } from 'src/app/pipes/due-date/due-date.pipe-module';
import { DaysLeftPipeModule } from 'src/app/pipes/days-left/days-left.pipe-module';
import { CheckListComponentModule } from '../check-list/check-list.component-module';
import { MiniAvatarListComponentModule } from '../mini-avatar-list/mini-avatar-list.component-module';
import { ListElementComponentModule } from '../list-element/list-element.component-module';
import { CardContentComponentModule } from '../card/card-content.component-module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    DueDatePipeModule,
    CheckListComponentModule,
    MiniAvatarListComponentModule,
    ListElementComponentModule,
    CardContentComponentModule,
  ],
  declarations: [TasksComponent],
  providers: [],
  exports: [TasksComponent],
})
export class TasksComponentModule {}
