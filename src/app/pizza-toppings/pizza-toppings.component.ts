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
    const pizzaToppings = this.pizzaSvc.loadPizzaToppings();
    console.log(pizzaToppings);
  }
}
