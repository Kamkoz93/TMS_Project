import { Pipe, PipeTransform } from '@angular/core';
import { CheckListItemModel } from 'src/app/models/check-list-item.model';

@Pipe({ name: 'doneChecksCounter' })
export class DoneChecksCounterPipe implements PipeTransform {
  transform(data: CheckListItemModel[]): number {
    return data.filter((item) => item.isDone === true).length;
  }
}
