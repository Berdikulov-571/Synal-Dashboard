import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EmployeeRequest } from '../models/Employee';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'http://localhost:5218/api/Employee';

  createEmployee(employeeRequest: EmployeeRequest): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.post(this.baseUrl, employeeRequest, httpOptions);
  }

}
