import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RecipeBookShoppingList';
  showRecipeBook = false;
  showShoppingList = false;

  onSelectDisplay(selectedElementFlags: {
    recipeListDisplay: boolean;
    shoppingListDisplay: boolean;
  }) {
    this.showRecipeBook = selectedElementFlags.recipeListDisplay;
    this.showShoppingList = selectedElementFlags.shoppingListDisplay;
  }
}
