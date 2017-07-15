import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-pizza',
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent implements OnInit {
  // Empty array to hold all them pizzas
  allThePizzas: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addPizzaToArray(thePizza) {
      this.allThePizzas.push(thePizza);
  }
} // close BuildPizzaComponent
