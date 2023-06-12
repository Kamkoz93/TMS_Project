import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListElementComponent {
  @Input() heading: string = '';
  @Input() description: string | null = '';
  @Input() progressValue: number = 0;
  @Input() multi?: boolean;
  @Input() urlId: string | null = null;
}
