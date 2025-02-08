import { NgModule } from '@angular/core';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [FormsModule, CommonModule, RouterModule.forChild([{
    path: 'shoppinglist',
    component: ShoppingListComponent,
  },])]
})
export class ShoppingListModule {}
