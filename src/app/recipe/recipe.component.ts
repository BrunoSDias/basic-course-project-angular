import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe/recipe.model'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeDetails: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  loadRecipeDetails(recipe: Recipe) {
    this.recipeDetails = recipe
  }

}
