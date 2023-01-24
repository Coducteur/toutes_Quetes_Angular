import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngHuitCreateOnomatopiaComponent } from './ang-huit-create-onomatopia.component';

describe('AngHuitCreateOnomatopiaComponent', () => {
  let component: AngHuitCreateOnomatopiaComponent;
  let fixture: ComponentFixture<AngHuitCreateOnomatopiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngHuitCreateOnomatopiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngHuitCreateOnomatopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
