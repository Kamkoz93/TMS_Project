import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { DueDatePipeModule } from 'src/app/pipes/due-date/due-date.pipe-module';
import { ListElementComponentModule } from '../list-element/list-element.component-module';
import { CardContentComponentModule } from '../card/card-content.component-module';
import { LoaderComponentModule } from '../loader/loader.component-module';
import { LoadingSpinnerDirectiveModule } from 'src/app/directives/loading-spinner/loading-spinner.directive-module';

@NgModule({
  imports: [
    CommonModule,
    DueDatePipeModule,
    ListElementComponentModule,
    CardContentComponentModule,
    LoaderComponentModule,
    LoadingSpinnerDirectiveModule,
  ],
  declarations: [ProjectsComponent],
  providers: [],
  exports: [],
})
export class ProjectsComponentModule {}
