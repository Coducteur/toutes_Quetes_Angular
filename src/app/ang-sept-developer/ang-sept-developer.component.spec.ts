import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngSeptDeveloperComponent } from './ang-sept-developer.component';

describe('AngSeptDeveloperComponent', () => {
  let component: AngSeptDeveloperComponent;
  let fixture: ComponentFixture<AngSeptDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngSeptDeveloperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngSeptDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
