import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from 'src/app/shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  constructor(private shoppingService: ShoppingService) {}
  @ViewChild('editForm') editingForm: NgForm;
  editingMode = false;
  editingItemIndex: number;
  editingItem: Ingredient;
  subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.shoppingService.itemForEditing.subscribe(
      (index: number) => {
        this.editingMode = true;
        this.editingItemIndex = index;
        this.editingItem = this.shoppingService.getShoppingIngredient(index);
        this.editingForm.setValue({
          nameField: this.editingItem.name,
          amountField: this.editingItem.amount,
        });
      }
    );
  }

  onAddIngredient(editForm: NgForm) {
    const values = editForm.value;
    const newIngredient = new Ingredient(values.nameField, values.amountField);
    if (this.editingMode)
      this.shoppingService.updateShoppingIngredient(
        this.editingItemIndex,
        newIngredient
      );
    else this.shoppingService.addShoppingIngredient(newIngredient);
    this.editingMode = false;
    this.editingForm.reset();
  }

  onClear() {
    this.editingForm.reset();
    this.editingMode = false;
  }

  onDeleteIngredient() {
    this.onClear();
    this.shoppingService.deleteShoppingIngredient(this.editingItemIndex);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
