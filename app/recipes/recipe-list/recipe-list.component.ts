import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Banana Peanut Butter Cookies',
      'Only 5 ingredients!',
      'https://kirbiecravings.com/wp-content/uploads/2021/08/peanut-butter-banana-cookies-6a.jpg'),
    new Recipe(
      'Oven Roasted Chicken',
      'Tender & Juicy!',
      'https://diethood.com/wp-content/uploads/2021/04/Simple-Baked-Chicken-Pieces-4.jpg')
  ];

  constructor() {
  }

  ngOnInit(){
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
