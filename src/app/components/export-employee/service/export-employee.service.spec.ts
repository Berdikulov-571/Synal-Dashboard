import { TestBed } from '@angular/core/testing';

import { ExportEmployeeService } from './export-employee.service';

describe('ExportEmployeeService', () => {
  let service: ExportEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
