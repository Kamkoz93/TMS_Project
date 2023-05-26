import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
  constructor(private _teamsService: TeamsService) {}

  readonly teamsList$: Observable<TeamModel[]> = this._teamsService.getAll();
}
