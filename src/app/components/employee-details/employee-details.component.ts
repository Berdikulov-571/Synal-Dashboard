import { Component } from '@angular/core';
import { Employee, EmployeeRequest } from '../add-employee/models/Employee';
import { EmployeeDetailsService } from './services/employee-details.service';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  GLobalId!: number;
  employee!: Employee;


  constructor(private employeeService: EmployeeDetailsService, private route: ActivatedRoute) {
    this.GLobalId = this.route.snapshot.params['id'];
  }

  updateEmployee(event: Event) {
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
      id: this.GLobalId,
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

    this.employeeService.updateEmployee(employeeRequest).subscribe(
      response => {
        alert('Updated')
      },
      error => {
        alert('There was an error!');
      }
    );
  }
}
