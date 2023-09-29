import { Subject } from 'rxjs';
import { Ingredient } from '../ingredient.model';

export class ShoppingService {
  shoppingIngredientsChanged = new Subject<Ingredient[]>();
  private shoppngIngredients: Ingredient[] = [
    new Ingredient('Apple', 25),
    new Ingredient('Banana', 12),
  ];

  getShoppingIngredients() {
    //Returning an exact copy of the above array
    return this.shoppngIngredients.slice();
  }

  addShoppingIngredient(newIngredient: Ingredient) {
    this.shoppngIngredients.push(newIngredient);
    this.shoppingIngredientsChanged.next(this.shoppngIngredients.slice());
  }

  addRecipeIngredients(recipeIngredients: Ingredient[]) {
    this.shoppngIngredients.push(...recipeIngredients);
    this.shoppingIngredientsChanged.next(this.shoppngIngredients.slice());
    //Alternate soln using concat method
    //concat returns a new array altogether
    //wheras push modifies the existing one
    //this.shoppngIngredients = this.shoppngIngredients.concat(recipeIngredients);
  }
}
