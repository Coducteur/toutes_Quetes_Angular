import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngUnBisAffichageComponent } from './ang-un-bis-affichage.component';

describe('AngUnBisAffichageComponent', () => {
  let component: AngUnBisAffichageComponent;
  let fixture: ComponentFixture<AngUnBisAffichageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngUnBisAffichageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngUnBisAffichageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
