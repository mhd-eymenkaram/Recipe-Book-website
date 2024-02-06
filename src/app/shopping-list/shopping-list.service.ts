import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService{

    private ingredients: Ingredients[] = [
        new Ingredients("Apple",50),
        new Ingredients("Tomatoes",10)
      ];

      getIngredients(): Ingredients[] {
        return this.ingredients;
      }
      addIngredients(ingredient :Ingredients){
        this.ingredients.push(ingredient);
      }

    
}