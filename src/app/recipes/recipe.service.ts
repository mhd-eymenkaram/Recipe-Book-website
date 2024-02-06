import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Burger","Recipe Description","https://i.pinimg.com/736x/a2/1a/68/a21a68142079dec294de7fb2af6a2d7f.jpg"),
        new Recipe("Pizza","Recipe Description","https://i.pinimg.com/736x/45/99/94/459994e791e58c2d6d4f5d2144384ad5.jpg")
    
      ];
    getRecipes(){
        return this.recipes.slice()
    }
}