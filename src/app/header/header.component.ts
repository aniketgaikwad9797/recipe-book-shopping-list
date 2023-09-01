import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed = true;
  @Output() selectDisplayElement = new EventEmitter<{
    recipeListDisplay: boolean;
    shoppingListDisplay: boolean;
  }>();

  onSelectDisplayElement(recipeBookFlag: boolean, shoppingListFlag: boolean) {
    this.selectDisplayElement.emit({
      recipeListDisplay: recipeBookFlag,
      shoppingListDisplay: shoppingListFlag,
    });
  }
}
