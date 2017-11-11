import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorIdCartComponent } from './sensor-id-cart.component';

describe('SensorIdCartComponent', () => {
  let component: SensorIdCartComponent;
  let fixture: ComponentFixture<SensorIdCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorIdCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorIdCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
