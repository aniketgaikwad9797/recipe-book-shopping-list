import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipeList: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeListChanged.subscribe(
      (changedRecipeList: Recipe[]) => {
        this.recipeList = changedRecipeList;
      }
    );
    this.recipeList = this.recipeService.getRecipes();
  }

  onAddNewRecipe() {
    //this.router.navigate(['new'], { relativeTo: this.route });
    this.router.navigate(['recipebook', 'new']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
