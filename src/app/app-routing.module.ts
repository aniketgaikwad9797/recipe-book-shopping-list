import { NgModule } from '@angular/core';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';

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
        path: ':recipeName',
        component: RecipeDetailComponent,
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
