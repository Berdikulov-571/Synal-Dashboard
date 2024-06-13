import { TestBed } from '@angular/core/testing';

import { ImportEmployeeService } from './import-employee.service';

describe('ImportEmployeeService', () => {
  let service: ImportEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
