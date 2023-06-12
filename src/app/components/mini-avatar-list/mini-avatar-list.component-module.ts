import { Input, NgModule } from '@angular/core';
import { MiniAvatarListComponent } from './mini-avatar-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [MiniAvatarListComponent],
  providers: [],
  exports: [MiniAvatarListComponent],
})
export class MiniAvatarListComponentModule {}
