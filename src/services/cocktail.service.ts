import { Injectable } from '@angular/core';
import { Cocktail } from '../models/Cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  //construire la liste de cocktails avec tous les cocktails dispo:

  constructor() {}

  /**
   * getCocktails
   */
  public getCocktails(cocktails: any): Cocktail[] {
    return cocktails;
  }
}
