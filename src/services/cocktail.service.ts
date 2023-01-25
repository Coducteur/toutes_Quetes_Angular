import { Injectable } from '@angular/core';
import { Cocktail } from '../models/Cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  //construire la liste de cocktails avec tous les cocktails dispo:
  cocktails: Cocktail[] = [
    new Cocktail(
      'Margarita',
      10,
      'https://static1.villaschweppes.com/articles/3/51/49/3/@/364501-la-margarita-le-cocktail-classique-star-article_source_adaptive-1.jpeg'
    ),
    new Cocktail(
      'Bellini',
      10,
      'https://static1.villaschweppes.com/articles/3/51/49/3/@/364405-le-bellini-le-cocktail-classique-italie-article_source_adaptive-2.jpeg'
    ),
    new Cocktail(
      'Spritz',
      10,
      'https://static1.villaschweppes.com/articles/3/51/49/3/@/364408-le-spritz-un-cocktail-classique-a-la-mo-article_source_adaptive-2.jpeg'
    ),
    new Cocktail(
      'Mojito',
      10,
      'https://static1.villaschweppes.com/articles/3/51/49/3/@/364468-le-mojito-le-cocktail-classique-de-cuba-article_source_adaptive-1.jpeg'
    ),
  ];
  constructor() {}

  /**
   * getCocktails
   */
  public getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
