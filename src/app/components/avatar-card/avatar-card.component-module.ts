import { NgModule } from '@angular/core';
import { AvatarCardComponent } from './avatar-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [AvatarCardComponent],
  providers: [],
  exports: [AvatarCardComponent],
})
export class AvatarCardComponentModule {}
