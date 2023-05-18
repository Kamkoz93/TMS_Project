import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dueDate',
})
export class DueDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: string | number): string {
    let date: Date;

    if (typeof value === 'string') {
      date = new Date(value);
    } else if (typeof value === 'number') {
      date = new Date(value * 1000);
    } else {
      return '';
    }

    date.setDate(date.getDate() - 1);
    return 'Due on ' + this.datePipe.transform(date, 'MMM d, y');
  }
}
