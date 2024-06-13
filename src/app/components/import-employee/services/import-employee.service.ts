import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImportEmployeeService {

  private baseUrl = 'http://localhost:5218/api/Employee/import';

  constructor(private httpClient: HttpClient) { }

  importEmployeesFromExcel(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const httpOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data'  // Note: HttpClient sets this automatically
      })
    };

    return this.httpClient.post(this.baseUrl, formData, httpOptions);
  }
}
