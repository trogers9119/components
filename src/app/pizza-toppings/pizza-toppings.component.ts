import { Component, OnInit } from '@angular/core';
import { PizzaService, PizzaToppingDisplay } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  // template: '<h1>No Way</h1>',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  //DI Magic ! ! !     pizzaSvc is the dependency of type PizzaService

  //For each new PizzaToppingsComponent you need to pass it a pizzaSvc,

  //PizzaToppingsComponent depends on pizzaSvc
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit(): void {
    this.pizzaToppings = this.pizzaSvc.loadPizzaToppings();
  }

  pizzaToppings: PizzaToppingDisplay[] = [];

  total = 0;
  //in class nod need for function keyword
  public calculateTotal() {
    this.total = this.pizzaToppings
      .filter(x => x.checked)
      .reduce(
        (acc, x) => acc + x.price
        , 0
      );
  }

}
