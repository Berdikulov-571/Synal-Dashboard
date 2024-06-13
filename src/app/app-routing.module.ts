import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ImportEmployeeComponent } from './components/import-employee/import-employee.component';
import { ExportEmployeeComponent } from './components/export-employee/export-employee.component';

const routes: Routes = [
  { path: 'add-employee', component: AddEmployeeComponent, title: 'Add Employee' },
  { path: 'employee-list', component: EmployeeListComponent, title: 'Employee List' },
  { path: 'import-employee', component: ImportEmployeeComponent, title: 'Import Employee' },
  { path: 'export-employee', component: ExportEmployeeComponent, title: 'Export Employee' },
  { path: 'employee-list/details/:id', component: EmployeeDetailsComponent, title: 'Employee Details' },
  { path: '', redirectTo: 'employee-list', title: 'Login ', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, title: "Not Found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
