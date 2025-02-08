import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingService } from './shared/services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './shared/services/recipe.service';
import { HttpClientModule} from '@angular/common/http'
import { RecipeModule } from './recipe-book/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DropdownDirective
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule,  AppRoutingModule, ReactiveFormsModule, RecipeModule],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
