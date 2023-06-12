import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ROUTES_DEF } from 'src/app/configuration/routes-definition';
import { AvatarCardQueryModel } from 'src/app/queries/avatar-card.query-model';

@Component({
  selector: 'app-mini-avatar-list',
  templateUrl: './mini-avatar-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniAvatarListComponent {
  @Input() data: AvatarCardQueryModel[] | null = [];

  readonly urlRoutes = ROUTES_DEF;
}
