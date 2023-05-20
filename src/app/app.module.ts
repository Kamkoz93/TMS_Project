import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListElementComponent } from './components/list-element/list-element.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardContentComponent } from './components/card/card-content.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DueDatePipeModule } from './pipes/due-date/due-date.pipe-module';
import { ProgressBarDirectiveModule } from './directives/progress-bar/progress-bar.directive-module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MiniAvatarListComponent } from './components/mini-avatar-list/mini-avatar-list.component';
import { RouterModule } from '@angular/router';
import { CheckListComponent } from './components/check-list/check-list.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AvatarCardComponent } from './components/avatar-card/avatar-card.component';
import { HomeComponent } from './components/home/home.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { ToggleViewDirective } from './directives/toggle-view/toggle-view.directive';
import { PointerOnHoverDirective } from './directives/pointer-on-hover/pointer-on-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListElementComponent,
    NavbarComponent,
    CardContentComponent,
    TeamsComponent,
    ProjectsComponent,
    TasksComponent,
    ProgressBarComponent,
    MiniAvatarListComponent,
    CheckListComponent,
    EmployeesComponent,
    AvatarCardComponent,
    HomeComponent,
    EmployeeDetailComponent,
    TeamDetailsComponent,
    ToggleViewDirective,
    PointerOnHoverDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DueDatePipeModule,
    ProgressBarDirectiveModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
