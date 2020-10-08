import { Component, OnInit } from '@angular/core';
import { PizzaService, PizzaToppingDisplay } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  // template: '<h1>no way</h1>',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  // DI Magic ! ! !
  constructor(public pizzaSvc: PizzaService) { }

  // constructor (pizzaSvc: PizzaService) {
  //   this.pizzaSvc = pizzaSvc
  // };

  // public pizzaSvc: PizzaService;

  ngOnInit(): void {
    this.pizzaToppings = this.pizzaSvc.loadPizzaToppings();
  }

  pizzaToppings: PizzaToppingDisplay[] = [];

  total = 0;

  public calculateTotal() {
      //console.log('here');

      this.total = this.pizzaToppings
        .filter(x => x.checked)
        .reduce(
          (acc, x) => acc + x.price
          , 0
        );
  }

  checkAll = () => {
    this.pizzaToppings = this.pizzaToppings.map(x => ({
      ...x
      , checked: true
    }));
  }

  uncheckAll = () => {
    this.pizzaToppings = this.pizzaToppings.map(x => ({
      ...x
      , checked: false
    }));
  }
}
