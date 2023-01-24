import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngDeuxBindingComponent } from './ang-deux-binding.component';

describe('AngDeuxBindingComponent', () => {
  let component: AngDeuxBindingComponent;
  let fixture: ComponentFixture<AngDeuxBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngDeuxBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngDeuxBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
