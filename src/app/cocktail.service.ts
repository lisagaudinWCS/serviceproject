import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  getCocktails(): Cocktail[] {
    return [
      {
        name: "Vigin Mojito",
        price: 10,
        image: "https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }, 
      {
        name: "Cuba Libre",
        price: 15,
        image: "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  }
}
