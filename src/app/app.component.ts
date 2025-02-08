import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './shared/services/data-storage.service';
//Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'RecipeBookShoppingList';
  constructor(private dataStorageService: DataStorageService){}
  ngOnInit(): void {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
