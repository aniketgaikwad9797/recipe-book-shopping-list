import { Subject } from 'rxjs';
import { Ingredient } from '../ingredient.model';

export class ShoppingService {
  shoppingIngredientsChanged = new Subject<Ingredient[]>();
  itemForEditing = new Subject<number>();
  private shoppngIngredients: Ingredient[] = [
    new Ingredient('Apple', 25),
    new Ingredient('Banana', 12),
  ];

  getShoppingIngredient(index: number) {
    return this.shoppngIngredients[index];
  }

  getShoppingIngredients() {
    //Returning an exact copy of the above array
    return this.shoppngIngredients.slice();
  }

  addShoppingIngredient(newIngredient: Ingredient) {
    this.shoppngIngredients.push(newIngredient);
    this.shoppingIngredientsChanged.next(this.shoppngIngredients.slice());
  }

  updateShoppingIngredient(index: number, updatedIngredient: Ingredient) {
    this.shoppngIngredients[index] = updatedIngredient;
    this.shoppingIngredientsChanged.next(this.shoppngIngredients.slice());
  }

  deleteShoppingIngredient(index: number) {
    this.shoppngIngredients.splice(index, 1);
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
