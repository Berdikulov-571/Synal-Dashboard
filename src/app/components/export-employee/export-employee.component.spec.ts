import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportEmployeeComponent } from './export-employee.component';

describe('ExportEmployeeComponent', () => {
  let component: ExportEmployeeComponent;
  let fixture: ComponentFixture<ExportEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
