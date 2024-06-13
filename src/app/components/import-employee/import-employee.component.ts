import { Component } from '@angular/core';
import { ImportEmployeeService } from './services/import-employee.service';
import { response } from 'express';

@Component({
  selector: 'app-import-employee',
  templateUrl: './import-employee.component.html',
  styleUrl: './import-employee.component.css'
})
export class ImportEmployeeComponent {
  globalValue!: File;

  constructor(private importEmployeeService: ImportEmployeeService) {

  }


  method(event: any) {
    this.globalValue = <File>event.target.files[0];
  }

  importEmployee(event: Event) {
    console.log(this.globalValue);

    if (this.globalValue) {
      this.importEmployeeService.importEmployeesFromExcel(this.globalValue).subscribe(
        response => {
          alert('Employees imported successfully');
        },
        error => {
          alert('Employees imported successfully');
        }
      );
    }
    else {
      alert('There was an error!')
    }
  }
}
