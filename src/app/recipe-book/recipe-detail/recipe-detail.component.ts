import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() singleRecipeItemDetail: Recipe;

  constructor(private shoppingService: ShoppingService) {}

  onAddIngredientsShoppingList() {
    this.shoppingService.addRecipeIngredients(
      this.singleRecipeItemDetail.ingredients
    );
  }
}
