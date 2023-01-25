import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngOnzeCocktailListComponent } from './ang-onze-cocktail-list.component';

describe('AngOnzeCocktailListComponent', () => {
  let component: AngOnzeCocktailListComponent;
  let fixture: ComponentFixture<AngOnzeCocktailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngOnzeCocktailListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngOnzeCocktailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
