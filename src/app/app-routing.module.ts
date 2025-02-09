import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'recipebook',
    pathMatch: 'full',
  },
  {
    path: 'recipebook',
    loadChildren: ()=>import('./recipe-book/recipe.module').then((m)=>m.RecipeModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
