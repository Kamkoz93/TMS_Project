import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressBarDirectiveModule } from './directives/progress-bar/progress-bar.directive-module';
import { RouterModule } from '@angular/router';
import { ProjectsComponentModule } from './components/projects/projects.component-module';
import { TasksComponentModule } from './components/tasks/tasks.component-module';
import { TeamDetailsComponentModule } from './components/team-details/team-details.component-module';
import { HomeComponentModule } from './components/home/home.component-module';
import { AvatarCardComponentModule } from './components/avatar-card/avatar-card.component-module';
import { EmployeeDetailComponentModule } from './components/employee-detail/employee-detail.component-module';
import { EmployeesComponentModule } from './components/employees/employees.component-module';
import { ListElementComponentModule } from './components/list-element/list-element.component-module';
import { CardContentComponentModule } from './components/card/card-content.component-module';
import { TeamsComponentModule } from './components/teams/teams.component-module';
import { CommonModule } from '@angular/common';
import { LoaderInterceptor } from './services/loader-interceptor';
import { LoaderComponentModule } from './components/loader/loader.component-module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ProgressBarDirectiveModule,
    ProjectsComponentModule,
    TasksComponentModule,
    TeamDetailsComponentModule,
    ProgressBarDirectiveModule,
    HomeComponentModule,
    AvatarCardComponentModule,
    EmployeeDetailComponentModule,
    EmployeesComponentModule,
    ListElementComponentModule,
    CardContentComponentModule,
    TeamsComponentModule,
    LoaderComponentModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
