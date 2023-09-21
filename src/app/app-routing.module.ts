import { NgModule } from '@angular/core';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: 'recipebook',
      pathMatch: 'full',
    },
    {
      path: 'recipebook',
      component: RecipeBookComponent,
    },
    {
      path: 'shoppinglist',
      component: ShoppingListComponent,
    },
  ];

@NgModule({
imports: [ RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule{

}