import { EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipe-book/recipe.model';
import { Ingredient } from '../ingredient.model';

export class RecipeService {
  private completeRecipeList: Recipe[] = [
    new Recipe(
      'Big Fat Burger',
      'Tasty Chicken filled fat Burger!',
      'https://cdn-cmjom.nitrocdn.com/FpMsHpAgoVrRMnuAdmBhGkyiizdsWlSU/assets/images/optimized/rev-dd2c928/wp-content/uploads/2018/09/fb18_FatCheeseBeer.png.webp',
      [new Ingredient('chicken breast', 1), new Ingredient('Bun', 2)]
    ),
    new Recipe(
      'Nesquick Chocolate Wafle',
      'Chocolate coated tasty Waffles with strawberries',
      'https://www.nestle-cereals.com/global/sites/g/files/qirczx806/files/srh_recipes/a3858458e3a662d06925210462b6471b.jpg',
      [new Ingredient('Egs', 6), new Ingredient('Flour', 5)]
    ),
  ];

  getRecipes() {
    //slice returns a copy of the exact array
    return this.completeRecipeList.slice();
  }

  selectRecipe = new EventEmitter<Recipe>();
  selectRecipeItem() {}
}
