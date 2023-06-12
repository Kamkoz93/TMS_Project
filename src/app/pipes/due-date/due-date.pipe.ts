import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dueDate',
})
export class DueDatePipe implements PipeTransform {
  transform(value: string | number | null): string {
    if (typeof value === 'number') {
      const date = new Date(value * 1000);
      const month = date.toLocaleString('en', { month: 'short' });
      const day = date.getDate();
      const year = date.getFullYear();
      return `Due on ${month} ${day}, ${year}`;
    }

    return 'Due on ' + value;
  }
}
