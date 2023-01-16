import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../models/cocktail.model';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(public CocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktails = this.getCocktails();
  }
  getCocktails(): Cocktail[] {
    return this.CocktailService.getCocktails();
  }

}
