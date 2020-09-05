import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() addedIngredient = new EventEmitter<Ingredient>()
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("nameInput", { static: true }) ingredientName: ElementRef
  @ViewChild("amountInput", { static: true }) ingredientAmount: ElementRef

  addItem() {
    const ingredient = new Ingredient(
      this.ingredientName.nativeElement.value,
      this.ingredientAmount.nativeElement.value
    )

    this.addedIngredient.emit(ingredient)

    this.ingredientName.nativeElement.value = ""
    this.ingredientAmount.nativeElement.value = ""
  }

}
