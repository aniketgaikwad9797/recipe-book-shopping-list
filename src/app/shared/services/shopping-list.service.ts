import { Ingredient } from '../ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingService {
  shoppingIngredientsChanged = new EventEmitter<Ingredient[]>();
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
    this.shoppingIngredientsChanged.emit(this.shoppngIngredients.slice());
  }

  addRecipeIngredients(recipeIngredients: Ingredient[]) {
    this.shoppngIngredients.push(...recipeIngredients);
    //Alternate soln using concat method
    //concat returns a new array altogether
    //wheras push modifies the existing one
    this.shoppngIngredients = this.shoppngIngredients.concat(recipeIngredients);
  }
}
