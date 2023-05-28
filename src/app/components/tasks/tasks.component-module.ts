import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { DueDatePipeModule } from 'src/app/pipes/due-date/due-date.pipe-module';
import { CheckListComponentModule } from '../check-list/check-list.component-module';
import { MiniAvatarListComponentModule } from '../mini-avatar-list/mini-avatar-list.component-module';
import { ListElementComponentModule } from '../list-element/list-element.component-module';
import { CardContentComponentModule } from '../card/card-content.component-module';
import { CommonModule } from '@angular/common';
import { DoneChecksCounterPipeModule } from 'src/app/pipes/done-checks-counter/done-checks-counter.pipe-module';
import { LoaderComponentModule } from '../loader/loader.component-module';
import { LoadingSpinnerDirectiveModule } from 'src/app/directives/loading-spinner/loading-spinner.directive-module';

@NgModule({
  imports: [
    CommonModule,
    DueDatePipeModule,
    CheckListComponentModule,
    MiniAvatarListComponentModule,
    ListElementComponentModule,
    CardContentComponentModule,
    DoneChecksCounterPipeModule,
    LoaderComponentModule,
    LoadingSpinnerDirectiveModule
  ],
  declarations: [TasksComponent],
  providers: [],
  exports: [TasksComponent],
})
export class TasksComponentModule {}
