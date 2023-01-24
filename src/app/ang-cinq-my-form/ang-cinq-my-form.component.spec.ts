import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngCinqMyFormComponent } from './ang-cinq-my-form.component';

describe('AngCinqMyFormComponent', () => {
  let component: AngCinqMyFormComponent;
  let fixture: ComponentFixture<AngCinqMyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngCinqMyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngCinqMyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
