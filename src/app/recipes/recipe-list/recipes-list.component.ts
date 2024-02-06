import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
getRecipes(_t10: Recipe) {
throw new Error('Method not implemented.');
}
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  //Servis ile değiştirldi
  // recipes: Recipe[] = [
  //   new Recipe("Burger","Recipe Description","https://i.pinimg.com/736x/a2/1a/68/a21a68142079dec294de7fb2af6a2d7f.jpg"),
  //   new Recipe("Pizza","Recipe Description","https://i.pinimg.com/736x/45/99/94/459994e791e58c2d6d4f5d2144384ad5.jpg")

  // ];

  recipes!: Recipe[];
  //Service Injection
  constructor(private recipeService:RecipeService){
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

  }

  // OnRecipeSelected(recipe:Recipe){
  //   this.recipeWasSelected.emit(recipe)
  // }
  

}
