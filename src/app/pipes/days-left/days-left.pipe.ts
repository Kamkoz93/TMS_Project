import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'daysLeft' })
export class DaysLeftPipe implements PipeTransform {
  transform(dueDate: string): string {
    const currentDate = new Date();
    const targetDate = new Date(dueDate);
    const timeDiff = targetDate.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24) - 1);

    return daysLeft <= 0
      ? 'Dued'
      : daysLeft === 1
      ? 'Due 1 day'
      : `Due ${daysLeft} days`;
  }
}
