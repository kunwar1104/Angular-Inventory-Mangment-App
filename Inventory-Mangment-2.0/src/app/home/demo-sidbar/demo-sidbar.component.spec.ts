import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSidbarComponent } from './demo-sidbar.component';

describe('DemoSidbarComponent', () => {
  let component: DemoSidbarComponent;
  let fixture: ComponentFixture<DemoSidbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoSidbarComponent]
    });
    fixture = TestBed.createComponent(DemoSidbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
