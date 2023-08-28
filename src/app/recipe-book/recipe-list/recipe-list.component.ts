import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipeList: Recipe[] = [
    new Recipe(
      'TestRecipe',
      'Description about the recipe',
      'https://www.jocooks.com/wp-content/uploads/2019/07/garlic-and-paprika-chicken-1-14-1229x1536.jpg'
    ),
    new Recipe(
      'TestRecipe',
      'Description about the recipe',
      'https://www.jocooks.com/wp-content/uploads/2019/07/garlic-and-paprika-chicken-1-14-1229x1536.jpg'
    ),
  ];
}
