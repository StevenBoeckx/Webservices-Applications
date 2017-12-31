import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensDataManagementComponent } from './sens-data-management.component';

describe('SensDataManagementComponent', () => {
  let component: SensDataManagementComponent;
  let fixture: ComponentFixture<SensDataManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensDataManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensDataManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
