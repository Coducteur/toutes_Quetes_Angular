import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngDixServicesComponent } from './ang-dix-services.component';

describe('AngDixServicesComponent', () => {
  let component: AngDixServicesComponent;
  let fixture: ComponentFixture<AngDixServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngDixServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngDixServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
