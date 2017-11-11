import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogScreenComponent } from './log-screen.component';

describe('LogScreenComponent', () => {
  let component: LogScreenComponent;
  let fixture: ComponentFixture<LogScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
