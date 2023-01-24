import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngTroisDirectivesComponent } from './ang-trois-directives.component';

describe('AngTroisDirectivesComponent', () => {
  let component: AngTroisDirectivesComponent;
  let fixture: ComponentFixture<AngTroisDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngTroisDirectivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngTroisDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
