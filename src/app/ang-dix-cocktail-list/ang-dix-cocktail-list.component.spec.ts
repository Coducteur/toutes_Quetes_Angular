import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngDixCocktailListComponent } from './ang-dix-cocktail-list.component';

describe('AngDixCocktailListComponent', () => {
  let component: AngDixCocktailListComponent;
  let fixture: ComponentFixture<AngDixCocktailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngDixCocktailListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngDixCocktailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
