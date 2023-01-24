import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngSeptSkillComponent } from './ang-sept-skill.component';

describe('AngSeptSkillComponent', () => {
  let component: AngSeptSkillComponent;
  let fixture: ComponentFixture<AngSeptSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngSeptSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngSeptSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
