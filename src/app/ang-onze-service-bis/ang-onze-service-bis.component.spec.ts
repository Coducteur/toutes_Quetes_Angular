import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngOnzeServiceBisComponent } from './ang-onze-service-bis.component';

describe('AngOnzeServiceBisComponent', () => {
  let component: AngOnzeServiceBisComponent;
  let fixture: ComponentFixture<AngOnzeServiceBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngOnzeServiceBisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngOnzeServiceBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
