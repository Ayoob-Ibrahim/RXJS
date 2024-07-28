import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetalertTestComponent } from './sweetalert-test.component';

describe('SweetalertTestComponent', () => {
  let component: SweetalertTestComponent;
  let fixture: ComponentFixture<SweetalertTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SweetalertTestComponent]
    });
    fixture = TestBed.createComponent(SweetalertTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
