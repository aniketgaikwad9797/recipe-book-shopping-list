import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shared/services/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  singleRecipeItemDetail: Recipe;

  constructor(
    private shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const recipeName = this.route.snapshot.params.recipeName;
    this.singleRecipeItemDetail = this.recipeService.getRecipe(recipeName);
    this.route.params.subscribe((data: Params) => {
      this.singleRecipeItemDetail = this.recipeService.getRecipe(
        data.recipeName
      );
    });
  }

  onAddIngredientsShoppingList() {
    this.shoppingService.addRecipeIngredients(
      this.singleRecipeItemDetail.ingredients
    );
  }
}
