import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { CardContentComponentModule } from '../card/card-content.component-module';
import { AvatarCardComponentModule } from '../avatar-card/avatar-card.component-module';
import { CommonModule } from '@angular/common';
import { LoaderComponentModule } from '../loader/loader.component-module';
import { LoadingSpinnerDirectiveModule } from 'src/app/directives/loading-spinner/loading-spinner.directive-module';

@NgModule({
  imports: [
    CommonModule,
    CardContentComponentModule,
    AvatarCardComponentModule,
    LoaderComponentModule,
    LoadingSpinnerDirectiveModule
  ],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesComponentModule {}
