import { Recipe } from 'src/app/recipe-book/recipe.model';

export class RecipeService {
  private completeRecipeList: Recipe[] = [
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

  getRecipes() {
    //slice returns a copy of the exact array
    return this.completeRecipeList.slice();
  }
}
