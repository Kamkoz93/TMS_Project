import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';

const routes: Routes = [
  { path: 'employee/:id', component: EmployeeDetailComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: '', component: HomeComponent },
  { path: 'teams/:id', component: TeamDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
