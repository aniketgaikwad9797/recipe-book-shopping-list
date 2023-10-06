import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  recipeIngredients = [];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = +data.recipeId;
      this.editMode = data.recipeId !== undefined;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImageURL = '';
    let recipeDescription = '';
    

    if (this.editMode) {
      let recipe = this.recipeService.getRecipeById(this.id);
      console.log(recipe);
      recipeName = recipe.name;
      recipeImageURL = recipe.imagePath;
      recipeDescription = recipe.description;
      this.recipeIngredients = recipe.ingredients
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imageUrl: new FormControl(recipeImageURL),
      description: new FormControl(recipeDescription),
    });
  }
}
