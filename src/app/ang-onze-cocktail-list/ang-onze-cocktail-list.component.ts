import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/models/Cocktail.model';
import { CocktailService } from 'src/services/cocktail2.service';

@Component({
  selector: 'app-ang-onze-cocktail-list',
  templateUrl: './ang-onze-cocktail-list.component.html',
  styleUrls: ['./ang-onze-cocktail-list.component.css'],
})
export class AngOnzeCocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(public cocktailService: CocktailService) {}

  ngOnInit() {
    this.cocktailService.getCocktails().subscribe((cocktailsFromJsonFile) => {
      this.cocktails = cocktailsFromJsonFile.result;
    });
  }
}
