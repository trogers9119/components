import { Component, OnInit } from '@angular/core';
import { PizzaService, PizzaToppingDisplay } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  //DI Magic ! ! !
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
