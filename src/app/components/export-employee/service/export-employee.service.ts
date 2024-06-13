import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ExportEmployeeService {

  private apiUrl = 'http://localhost:5218/api/Employee/export';

  constructor(private http: HttpClient) { }

  downloadExcelFile(): Observable<Blob> {
    return this.http.get(this.apiUrl, {
      responseType: 'blob'
    });
  }

}
