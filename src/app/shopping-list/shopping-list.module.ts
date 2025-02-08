import { NgModule } from '@angular/core';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [FormsModule, CommonModule],
  exports: [ShoppingListComponent, ShoppingListEditComponent],
})
export class ShoppingListModule {}
