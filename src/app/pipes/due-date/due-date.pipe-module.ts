import { NgModule } from '@angular/core';
import { DueDatePipe } from './due-date.pipe';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [],
  declarations: [DueDatePipe],
  providers: [DatePipe],
  exports: [DueDatePipe],
})
export class DueDatePipeModule {}
