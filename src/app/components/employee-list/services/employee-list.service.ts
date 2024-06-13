import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EmployeeList } from '../models/EmployeeList';
import { Employee } from '../../add-employee/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  private baseUrl = 'http://localhost:5218/api/Employee';
  //http://localhost:5218/api/Employee?Page=1&PageSize=10&Search=12

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(page: number, text: string): Observable<EmployeeList[]> {
    if (text.length == 0) {
      return this.httpClient.get<any>(this.baseUrl + `?Page=${page}&PageSize=10`)
        .pipe(
          map(response => response.items as EmployeeList[]) // Extract and cast items array
        );
    }
    else {
      return this.httpClient.get<any>(this.baseUrl + `?Page=${page}&PageSize=10&Search=${text}`)
        .pipe(
          map(response => response.items as EmployeeList[]) // Extract and cast items array
        );
    }
  }

  getCount(text: string): Observable<number> {
    if (text.length == 0) {
      return this.httpClient.get<any>(this.baseUrl).pipe(
        map(response => response.totalItems)
      );
    }
    else {
      return this.httpClient.get<any>(this.baseUrl + `?Search=${text}`).pipe(
        map(response => response.totalItems)
      );
    }
  }


  deleteEmployee(em_id: number): Observable<any> {
    const payload = {
      session: '~',
      id: em_id
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: payload
    };

    return this.httpClient.delete(this.baseUrl, httpOptions);
  }

}