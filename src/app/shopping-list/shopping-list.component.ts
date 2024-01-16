import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {

  ingredients: Ingredients[] = [
    new Ingredients("Apple",50),
    new Ingredients("Tomatoes",10)
  ];

  constructor(){

  }


}
