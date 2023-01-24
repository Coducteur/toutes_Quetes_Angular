import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngSeptInputComponent } from './ang-sept-input.component';

describe('AngSeptInputComponent', () => {
  let component: AngSeptInputComponent;
  let fixture: ComponentFixture<AngSeptInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngSeptInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngSeptInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
