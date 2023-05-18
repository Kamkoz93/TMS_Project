import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dueDate',
})
export class DueDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: string): string {
    const date = new Date(value);
    date.setDate(date.getDate() - 1);
    return 'Due on ' + this.datePipe.transform(date, 'MMM d, y');
  }
}
