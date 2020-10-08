import { Component, OnInit } from '@angular/core';
import { PizzaService, PizzaToppingDisplay } from '../pizza.service';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  //template: '<h1>No way</h1>',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  //
  // DI no longer magic ! ! !
  constructor(public pizzaSvc: PizzaService) {}

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
}
