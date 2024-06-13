import { Component } from '@angular/core';
import { AddEmployeeService } from './services/add-employee.service';
import { response } from 'express';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { Employee, EmployeeRequest } from './models/Employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {


  constructor(private addEmployeeService: AddEmployeeService) { }

  createEmployee(event: Event) {
    event.preventDefault();


    let InputPayrollNumber = document.querySelector('#payrollNumber') as HTMLInputElement;
    let InputForenames = document.querySelector('#forenames') as HTMLInputElement;
    let InputSurname = document.querySelector('#surname') as HTMLInputElement;
    let InputDateOfBirth = document.querySelector('#dateOfBirth') as HTMLInputElement;
    let InputPhoneNumber = document.querySelector('#telephone') as HTMLInputElement;
    let InputMobile = document.querySelector('#mobile') as HTMLInputElement;
    let InputAddress = document.querySelector('#address') as HTMLInputElement;
    let InputAddress2 = document.querySelector('#address2') as HTMLInputElement;
    let InputPostcode = document.querySelector('#postcode') as HTMLInputElement;
    let InputEmailHome = document.querySelector('#emailHome') as HTMLInputElement;
    let InputStartDate = document.querySelector('#startDate') as HTMLInputElement;

    const employeeData: Employee = {
      id: 0,
      payrollNumber: InputPayrollNumber.value,
      forenames: InputForenames.value,
      surname: InputSurname.value,
      dateOfBirth: InputDateOfBirth.value,
      telephone: InputPhoneNumber.value,
      mobile: InputMobile.value,
      address: InputAddress.value,
      address2: InputAddress2.value,
      postcode: InputPostcode.value,
      emailHome: InputEmailHome.value,
      startDate: InputStartDate.value
    };

    const employeeRequest: EmployeeRequest = {
      session: '~',
      entity: employeeData
    };

    this.addEmployeeService.createEmployee(employeeRequest).subscribe(
      response => {
        alert('Created')
      },
      error => {
        alert('There was an error!');
      }
    );




    // (this.addEmployeeService.createEmployee(formData).subscribe(response => {
    //   alert('Created');
    //   console.log(response);
    // }, (error: HttpErrorResponse) => {
    //   alert("Enter the information correctly");
    // }
    // ))
  }



}
