import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() singleRecipeItem: Recipe;
  @Output() itemSelect = new EventEmitter<{}>();
  selectedItem() {
    this.itemSelect.emit(this.singleRecipeItem);
  }
}
