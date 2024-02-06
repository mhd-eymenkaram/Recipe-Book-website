import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit{
  
  ingredients!: Ingredients[] 
  // ingredients: Ingredients[] = [
  //   new Ingredients("Apple",50),
  //   new Ingredients("Tomatoes",10)
  // ];

  constructor(private slService :ShoppingListService){

  }
  ngOnInit(): void {
  this.ingredients = this.slService.getIngredients();

  }
  


}
