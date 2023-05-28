import { NgModule } from '@angular/core';
import { TeamDetailsComponent } from './team-details.component';
import { DueDatePipeModule } from 'src/app/pipes/due-date/due-date.pipe-module';
import { DaysLeftPipeModule } from 'src/app/pipes/days-left/days-left.pipe-module';
import { ListElementComponentModule } from '../list-element/list-element.component-module';
import { CardContentComponentModule } from '../card/card-content.component-module';
import { MiniAvatarListComponentModule } from '../mini-avatar-list/mini-avatar-list.component-module';
import { CommonModule } from '@angular/common';
import { LoaderComponentModule } from '../loader/loader.component-module';
import { LoadingSpinnerDirectiveModule } from 'src/app/directives/loading-spinner/loading-spinner.directive-module';

@NgModule({
  imports: [
    CommonModule,
    DueDatePipeModule,
    DaysLeftPipeModule,
    ListElementComponentModule,
    CardContentComponentModule,
    MiniAvatarListComponentModule,
    LoaderComponentModule,
    LoadingSpinnerDirectiveModule,
  ],
  declarations: [TeamDetailsComponent],
  providers: [],
  exports: [TeamDetailsComponent],
})
export class TeamDetailsComponentModule {}
