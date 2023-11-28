import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDemoComponent } from './sidebar.component';

describe('SidebarDemoComponent', () => {
  let component: SidebarDemoComponent;
  let fixture: ComponentFixture<SidebarDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarDemoComponent]
    });
    fixture = TestBed.createComponent(SidebarDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
