import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NotFoundComponent, NumberService } from './components/not-found/not-found.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ImportEmployeeComponent } from './components/import-employee/import-employee.component';
import { ExportEmployeeComponent } from './components/export-employee/export-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    EmployeeListComponent,
    NotFoundComponent,
    MenuBarComponent,
    EmployeeDetailsComponent,
    ImportEmployeeComponent,
    ExportEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    NumberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
