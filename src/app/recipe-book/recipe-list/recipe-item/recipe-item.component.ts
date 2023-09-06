import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() singleRecipeItem: Recipe;

  constructor(private recipeService: RecipeService) {}
  selectedItem() {
    this.recipeService.selectRecipe.emit(this.singleRecipeItem);
  }
}
