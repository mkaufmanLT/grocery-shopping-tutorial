import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe(
      'Banana Peanut Butter Cookies',
      '5 ingredients only!',
      'https://kirbiecravings.com/wp-content/uploads/2021/08/peanut-butter-banana-cookies-6a.jpg')
  ];

  constructor() {
  }

  ngOnInit(){
  }
}
