import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
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

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe((data: Params) => {
      this.id = +data.recipeIndex;
      this.editMode = data.recipeIndex !== undefined;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImageURL = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      let recipe = this.recipeService.getRecipeByIndex(this.id);
      recipeName = recipe.name;
      recipeImageURL = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients) {
        for (let ingredient of recipe.ingredients)
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9][0-9]*$/),
              ]),
            })
          );
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      imagePath: new FormControl(recipeImageURL, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  get recipeControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSubmitForm() {
    if (this.editMode)
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    else this.recipeService.addrecipe(this.recipeForm.value);
    this.editMode = false;
    this.router.navigate(['recipebook']);
  }

  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9][0-9]*$/),
        ]),
      })
    );
  }

  onCancel() {
    this.router.navigate(['recipebook']);
  }
}
