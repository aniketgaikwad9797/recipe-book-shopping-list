import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 25),
    new Ingredient('Banana', 12),
  ];

  onIngredientAdded(ingredientAddedDetails: Ingredient) {
    this.ingredients.push(ingredientAddedDetails);
  }
}
