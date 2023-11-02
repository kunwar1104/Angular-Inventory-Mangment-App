import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryUpdateComponent } from './catagory-update.component';

describe('CatagoryUpdateComponent', () => {
  let component: CatagoryUpdateComponent;
  let fixture: ComponentFixture<CatagoryUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatagoryUpdateComponent]
    });
    fixture = TestBed.createComponent(CatagoryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
