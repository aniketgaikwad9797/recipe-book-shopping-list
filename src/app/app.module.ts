import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shared/services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { EditRecipeComponent } from './recipe-book/edit-recipe/edit-recipe.component';
import { RecipeService } from './shared/services/recipe.service';
import { HttpClientModule} from '@angular/common/http'
import { DropdownDirectiveRevision } from './shared/dropdown-dir-revision';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeBookComponent,
    DropdownDirective,
    RecipeStartComponent,
    EditRecipeComponent,
    DropdownDirectiveRevision
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule,  AppRoutingModule, ReactiveFormsModule],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
