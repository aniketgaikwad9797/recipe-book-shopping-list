import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
  providers: [RecipeService],
})
export class RecipeBookComponent {
  recipeItem: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipeService.selectRecipe.subscribe((selectedRecipeItm: Recipe) => {
      this.recipeItem = selectedRecipeItm;
      console.log(selectedRecipeItm);
    });
  }
}
