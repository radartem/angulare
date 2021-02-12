import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { EventsComponent } from './components/events/events.component';

const routes: Routes = [
  {path: '', component: StudentsComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'events', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
