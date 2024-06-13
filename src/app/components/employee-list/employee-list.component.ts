import { Component } from '@angular/core';
import { EmployeeList } from './models/EmployeeList';
import { EmployeeListService } from './services/employee-list.service';
import { response } from 'express';
import { Employee } from '../add-employee/models/Employee';
import { NumberService } from '../not-found/not-found.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  filteredUsers!: EmployeeList[];
  pageSize!: number;


  constructor(private employeeService: EmployeeListService, private numberService: NumberService) {
    this.getAllEmployees();
    this.getCount('');
  }


  getCount(text: string) {
    (this.employeeService.getCount(text).subscribe(response => {
      this.pageSize = Math.floor(response / 10) + 1;
    }))
    console.log(this.pageSize);
  }


  search(text: string, event: Event) {
    event.preventDefault();

    if (text.length == 0) {
      (this.employeeService.getAllEmployees(this.getNumber(), '').subscribe(response => {
        this.filteredUsers = response;
      }))
    } else {
      (this.employeeService.getAllEmployees(this.getNumber(), text).subscribe(response => {
        this.filteredUsers = response;
      }))
    }
  }

  getNumber() {
    return this.numberService.getNumber();
  }

  getAllEmployees() {
    (this.employeeService.getAllEmployees(this.getNumber(), '').subscribe(response => {
      this.filteredUsers = response
      console.log(this.filteredUsers)
    }))
  }

  removeEmployee(id: number) {
    (this.employeeService.deleteEmployee(id).subscribe(response => {
      location.reload();
    }))
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear().toString();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const hour = ('0' + date.getHours()).slice(-2);
    const minute = ('0' + date.getMinutes()).slice(-2);

    return `${year}/${month}/${day} ${hour}:${minute}`;
  }

  Previous(text: string) {
    if (this.getNumber() >= 1) {
      this.numberService.decrement();
      if (text == '') {
        (this.employeeService.getAllEmployees(this.getNumber(), '').subscribe(response => {
          this.filteredUsers = response;
        }))
      }
      else {
        (this.employeeService.getAllEmployees(this.getNumber(), text).subscribe(response => {
          this.filteredUsers = response;
        }))
      }
    }
  }

  Next(text: string) {
    if (this.getNumber() < this.pageSize) {
      this.numberService.increment();
      if (text == '') {
        (this.employeeService.getAllEmployees(this.getNumber(), '').subscribe(response => {
          this.filteredUsers = response;
        }))
      }
      else {
        (this.employeeService.getAllEmployees(this.getNumber(), text).subscribe(response => {
          this.filteredUsers = response;
        }))
      }
    }
  }
}
