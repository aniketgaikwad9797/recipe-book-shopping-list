import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShoppingService } from './shared/services/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './shared/services/recipe.service';
import { HttpClientModule} from '@angular/common/http'
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule,  AppRoutingModule, ReactiveFormsModule, ShoppingListModule],
  providers: [ShoppingService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
