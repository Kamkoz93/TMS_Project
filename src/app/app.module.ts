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

@NgModule({
  declarations: [
    AppComponent,
    ListElementComponent,
    NavbarComponent,
    CardContentComponent,
    TeamsComponent,
    ProjectsComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DueDatePipeModule,
    ProgressBarDirectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
