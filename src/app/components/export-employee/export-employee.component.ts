import { Component } from '@angular/core';
import { ExportEmployeeService } from './service/export-employee.service';


@Component({
  selector: 'app-export-employee',
  templateUrl: './export-employee.component.html',
  styleUrl: './export-employee.component.css'
})
export class ExportEmployeeComponent {

  constructor(private exportService: ExportEmployeeService) { }

  downloadFile(): void {
    this.exportService.downloadExcelFile().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = url;
      a.download = 'Employees.xlsx';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

}
