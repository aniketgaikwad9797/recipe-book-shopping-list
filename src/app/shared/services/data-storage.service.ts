import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from 'src/app/recipe-book/recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(
        'https://recipe-book-shopping-lis-10178-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((resp) => {
        console.log(resp);
      });
  }

  fetchRecipes() {
    return this.http
      .get(
        'https://recipe-book-shopping-lis-10178-default-rtdb.firebaseio.com/recipes.json'
      )
      .subscribe((recipeList: Recipe[]) => {
        this.recipeService.updateRecipes(recipeList);
      });
  }
}
