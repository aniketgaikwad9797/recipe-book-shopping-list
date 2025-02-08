import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RecipesResolverService } from "../shared/services/recipes-resolver.service";
import { EditRecipeComponent } from "./edit-recipe/edit-recipe.component";
import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";


const recipeRoutes = [
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
      }
]
@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]
})
export class RecipeRoutingModule{}