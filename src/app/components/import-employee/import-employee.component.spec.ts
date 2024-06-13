import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportEmployeeComponent } from './import-employee.component';

describe('ImportEmployeeComponent', () => {
  let component: ImportEmployeeComponent;
  let fixture: ComponentFixture<ImportEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImportEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImportEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
