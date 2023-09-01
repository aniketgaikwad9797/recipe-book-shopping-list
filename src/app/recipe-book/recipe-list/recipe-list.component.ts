import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() selectedItemDetails = new EventEmitter<{}>();
  recipeList: Recipe[] = [
    new Recipe(
      'TestRecipe1',
      'Description1 about the recipe',
      'https://www.jocooks.com/wp-content/uploads/2019/07/garlic-and-paprika-chicken-1-14-1229x1536.jpg'
    ),
    new Recipe(
      'TestRecipe2',
      'Description2 about the recipe',
      'https://www.jocooks.com/wp-content/uploads/2019/07/garlic-and-paprika-chicken-1-14-1229x1536.jpg'
    ),
  ];

  onItemSelect(selectedItemDetails: Recipe) {
    this.selectedItemDetails.emit(selectedItemDetails)
  }
}
