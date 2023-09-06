import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedItemDetails = new EventEmitter<{}>();
  recipeList: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeList = this.recipeService.completeRecipeList;
  }

  onItemSelect(selectedItemDetails: Recipe) {
    this.selectedItemDetails.emit(selectedItemDetails);
  }
}
