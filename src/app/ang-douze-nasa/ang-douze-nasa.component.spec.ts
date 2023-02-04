import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngDouzeNasaComponent } from './ang-douze-nasa.component';

describe('AngDouzeNasaComponent', () => {
  let component: AngDouzeNasaComponent;
  let fixture: ComponentFixture<AngDouzeNasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngDouzeNasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngDouzeNasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
