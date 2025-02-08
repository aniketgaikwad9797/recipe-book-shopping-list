import { NgModule } from '@angular/core';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './recipe-book.component';
import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { DropdownDirectiveRevision } from '../shared/dropdown-dir-revision';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    RecipeStartComponent,
    EditRecipeComponent,
    DropdownDirectiveRevision,
  ],
  imports: [AppRoutingModule, CommonModule, ReactiveFormsModule],
  exports: [
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
  ],
})
export class RecipeModule {}
