import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shared/services/shopping-list.service';
import { Subscription } from 'rxjs-compat';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientsChangedSubscription: Subscription;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getShoppingIngredients();
    this.ingredientsChangedSubscription =
      this.shoppingService.shoppingIngredientsChanged.subscribe(
        (changedIngredientsList: Ingredient[]) => {
          console.log(changedIngredientsList);
          this.ingredients = changedIngredientsList;
        }
      );
  }

  onEditItem(index: number) {
    this.shoppingService.itemForEditing.next(index);
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSubscription.unsubscribe();
  }
}
