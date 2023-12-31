import { NgModule } from '@angular/core';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './recipe-book/edit-recipe/edit-recipe.component';
import { RecipesResolverService } from './shared/services/recipes-resolver.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'recipebook',
    pathMatch: 'full',
  },
  {
    path: 'recipebook',
    component: RecipeBookComponent,
    children: [
      {
        path: '',
        component: RecipeStartComponent,
      },
      {
        path: 'new',
        component: EditRecipeComponent,
      },
      {
        path: ':recipeIndex',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':recipeIndex/edit',
        component: EditRecipeComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
  {
    path: 'shoppinglist',
    component: ShoppingListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
