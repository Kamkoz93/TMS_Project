import { Input, NgModule } from '@angular/core';
import { MiniAvatarListComponent } from './mini-avatar-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [MiniAvatarListComponent],
  providers: [],
  exports: [MiniAvatarListComponent],
})
export class MiniAvatarListComponentModule {}
