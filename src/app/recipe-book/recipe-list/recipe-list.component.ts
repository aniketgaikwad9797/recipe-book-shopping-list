import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeList = this.recipeService.getRecipes();
  }

  onAddNewRecipe() {
    //this.router.navigate(['new'], { relativeTo: this.route });
    this.router.navigate(['recipebook', 'new']);
  }
}
