import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent {
  constructor(private shoppingService: ShoppingService) {}

  onAddIngredient(editForm: NgForm) {
    console.log(editForm);
    const values = editForm.value;
    const newIngredient = new Ingredient(values.nameField, values.amountField);
    this.shoppingService.addShoppingIngredient(newIngredient);
    //this.ingredientAdded.emit(newIngredient);
  }
}
