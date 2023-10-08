import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shared/services/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  singleRecipeItemDetail: Recipe;
  recipeIndex: number;

  constructor(
    private shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.recipeIndex = data.recipeIndex;
      this.singleRecipeItemDetail = this.recipeService.getRecipeByIndex(
        +data.recipeIndex
      );
    });
  }

  onAddIngredientsShoppingList() {
    this.shoppingService.addRecipeIngredients(
      this.singleRecipeItemDetail.ingredients
    );
  }

  onEditRecipe() {
    this.router.navigate(['recipebook', this.recipeIndex, 'edit']);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.recipeIndex);
    this.router.navigate(['recipebook'])
  }
}
