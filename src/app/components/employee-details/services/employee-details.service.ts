import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, EmployeeRequest } from '../../add-employee/models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  private baseUrl = 'http://localhost:5218/api/Employee';

  constructor(private httpClient: HttpClient) { }

  updateEmployee(employeeRequest: EmployeeRequest): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient.put(this.baseUrl, employeeRequest, httpOptions);
  }

  getEmployeeById(id: number) {
    return this.httpClient.get<Employee>(this.baseUrl + id.toString());
  }
}
