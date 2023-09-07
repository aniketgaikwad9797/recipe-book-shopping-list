import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
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
  @ViewChild('ingredientName') ingName: ElementRef;
  @ViewChild('ingredientAmount') ingAmount: ElementRef;

  constructor(private shoppingService: ShoppingService) {}

  onAddIngredient() {
    const ingredientName = this.ingName.nativeElement.value;
    const ingredientAmount = this.ingAmount.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingService.addShoppingIngredient(newIngredient);
    //this.ingredientAdded.emit(newIngredient);
  }
}
