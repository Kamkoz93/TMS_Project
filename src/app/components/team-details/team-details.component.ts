import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { TeamModel } from 'src/app/models/team.model';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamDetailsComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _teamsService: TeamsService
  ) {}

  readonly teamDetails$: Observable<TeamModel> =
    this._activatedRoute.params.pipe(
      switchMap((params) => {
        return this._teamsService.getOne(params['id']);
      })
    );
}
