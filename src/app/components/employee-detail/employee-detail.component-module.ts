import { NgModule } from '@angular/core';
import { ListElementComponentModule } from '../list-element/list-element.component-module';
import { EmployeeDetailComponent } from './employee-detail.component';
import { CheckListComponentModule } from '../check-list/check-list.component-module';
import { DaysLeftPipeModule } from 'src/app/pipes/days-left/days-left.pipe-module';
import { MiniAvatarListComponentModule } from '../mini-avatar-list/mini-avatar-list.component-module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ListElementComponentModule,
    CheckListComponentModule,
    DaysLeftPipeModule,
    MiniAvatarListComponentModule,
  ],
  declarations: [EmployeeDetailComponent],
  providers: [],
  exports: [EmployeeDetailComponent],
})
export class EmployeeDetailComponentModule {}
