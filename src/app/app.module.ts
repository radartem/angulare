import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentComponent } from './components/students/student/student.component';
import { StudentListComponent } from './components/students/student-list/student-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CompanyComponent } from './components/companies/company/company.component';
import { CompanyListComponent } from './components/companies/company-list/company-list.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    StudentListComponent,
    NavigationComponent,
    CompaniesComponent,
    CompanyComponent,
    CompanyListComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
