import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngUnComposantComponent } from './ang-un-composant.component';

describe('AngUnComposantComponent', () => {
  let component: AngUnComposantComponent;
  let fixture: ComponentFixture<AngUnComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngUnComposantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngUnComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
