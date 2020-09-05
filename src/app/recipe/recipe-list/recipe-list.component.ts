import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeSelect = new EventEmitter<Recipe>();

  recipes :Recipe[] = [
  new Recipe('A Test Recipe',
               'Por conseguinte, a estrutura atual',
               'https://www.cscassets.com/recipes/wide_cknew/wide_32.jpg'),
    new Recipe('A Test Recipe',
                  'Por conseguinte, a estrutura atual',
                  'https://prestigesmartchef.com/media/images/content/Shami_kebab.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showRecipeDetails(recipe: Recipe) {
    this.onRecipeSelect.emit(recipe)
  }

}
