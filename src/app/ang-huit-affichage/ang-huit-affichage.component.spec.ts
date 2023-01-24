import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngHuitAffichageComponent } from './ang-huit-affichage.component';

describe('AngHuitAffichageComponent', () => {
  let component: AngHuitAffichageComponent;
  let fixture: ComponentFixture<AngHuitAffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngHuitAffichageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngHuitAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
