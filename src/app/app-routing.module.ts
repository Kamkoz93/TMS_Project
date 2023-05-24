import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { HomeComponent } from './components/home/home.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { ROUTES_DEF } from './configuration/routes-definition';

const routes: Routes = [
  {
    path: ROUTES_DEF.EMPLOYEE_DETAILS + ':id',
    component: EmployeeDetailComponent,
  },
  { path: ROUTES_DEF.TEAMS, component: TeamsComponent },
  { path: ROUTES_DEF.PROJECTS, component: ProjectsComponent },
  { path: ROUTES_DEF.TASKS, component: TasksComponent },
  { path: ROUTES_DEF.EMPLOYEES, component: EmployeesComponent },
  { path: ROUTES_DEF.BASE_URL, component: HomeComponent },
  { path: ROUTES_DEF.TEAMS + '/:id', component: TeamDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
