import {
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  constructor(private shoppingService: ShoppingService) {}

  onAddIngredient() {
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingService.addShoppingIngredient(newIngredient);
    //this.ingredientAdded.emit(newIngredient);
  }
}
