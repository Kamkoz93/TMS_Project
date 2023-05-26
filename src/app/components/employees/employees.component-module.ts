import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { CardContentComponentModule } from '../card/card-content.component-module';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    CardContentComponentModule,
    AvatarCardComponentModule,
  ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesComponentModule {}
