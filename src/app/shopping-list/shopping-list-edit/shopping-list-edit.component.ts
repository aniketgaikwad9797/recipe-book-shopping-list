import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {}
  @ViewChild('editForm') editingForm: NgForm;
  editingMode = false;
  editingItemIndex: number;
  editingItem: Ingredient;

  ngOnInit(): void {
    this.shoppingService.itemForEditing.subscribe((index: number) => {
      this.editingMode = true;
      this.editingItemIndex = index;
      this.editingItem = this.shoppingService.getShoppingIngredient(index);
      this.editingForm.setValue({
        nameField: this.editingItem.name,
        amountField: this.editingItem.amount,
      });
    });
  }

  onAddIngredient(editForm: NgForm) {
    console.log(editForm);
    const values = editForm.value;
    const newIngredient = new Ingredient(values.nameField, values.amountField);
    if (this.editingMode)
      this.shoppingService.updateShoppingIngredient(
        this.editingItemIndex,
        newIngredient
      );
    else this.shoppingService.addShoppingIngredient(newIngredient);
  }
}
