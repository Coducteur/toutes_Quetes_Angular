import { Component } from '@angular/core';
import { Cocktail } from '../../models/Cocktail.model';

import { CocktailService } from '../../services/cocktail.service';
@Component({
  selector: 'app-ang-dix-cocktail-list',
  templateUrl: './ang-dix-cocktail-list.component.html',
  styleUrls: ['./ang-dix-cocktail-list.component.css'],
})
export class AngDixCocktailListComponent {
  cocktails: Cocktail[] = [];

  constructor(public cocktailService: CocktailService) {}

  ngOnInit() {
    this.cocktails = this.cocktailService.getCocktails();
  }
}
