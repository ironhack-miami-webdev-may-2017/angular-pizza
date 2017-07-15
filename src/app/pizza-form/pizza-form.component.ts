import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.css']
})
export class PizzaFormComponent implements OnInit {
  theNewPizza: any = {};
  pizzaErrors: any = {};

  @Output() onPizzaAdd = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addDatPizza() {
      this.pizzaErrors = {};

      if (!this.theNewPizza.name) {
          this.pizzaErrors.name = 'Needs a name.';
      }

      if (!this.theNewPizza.price) {
          this.pizzaErrors.price = 'Needs a price.';
      }

      if (this.theNewPizza.calories === 0) {
          this.pizzaErrors.calories = 'Calories are only 0 in your dreams.';
      }
      else if (!this.theNewPizza.calories) {
          this.pizzaErrors.calories = 'Needs calories.';
      }

      if (!this.theNewPizza.ingredient) {
          this.pizzaErrors.ingredient = 'Please select an ingredient';
      }

      if (!this.pizzaErrors.name
          && !this.pizzaErrors.price
          && !this.pizzaErrors.calories
          && !this.pizzaErrors.ingredient) {
        this.onPizzaAdd.emit(this.theNewPizza);
        this.theNewPizza = {};
      }
  } // close addDatPizza
}
