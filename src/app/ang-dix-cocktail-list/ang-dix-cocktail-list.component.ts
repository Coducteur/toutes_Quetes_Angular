import { Component } from '@angular/core';
import { Cocktail } from '../../models/Cocktail.model';
import { cocktails } from 'src/data/cocktails-data';

import { CocktailService } from '../../services/cocktail.service';
@Component({
  selector: 'app-ang-dix-cocktail-list',
  templateUrl: './ang-dix-cocktail-list.component.html',
  styleUrls: ['./ang-dix-cocktail-list.component.css'],
})
export class AngDixCocktailListComponent {
  cocktailsList: Cocktail[] = [];

  constructor(public cocktailService: CocktailService) {}

  ngOnInit() {
    this.cocktailsList = this.cocktailService.getCocktails(cocktails);
  }
}
