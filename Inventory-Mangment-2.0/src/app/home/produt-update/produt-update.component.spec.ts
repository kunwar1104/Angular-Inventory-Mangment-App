import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutUpdateComponent } from './produt-update.component';

describe('ProdutUpdateComponent', () => {
  let component: ProdutUpdateComponent;
  let fixture: ComponentFixture<ProdutUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutUpdateComponent]
    });
    fixture = TestBed.createComponent(ProdutUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
