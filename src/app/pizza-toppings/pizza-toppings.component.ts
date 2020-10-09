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

  //adding public in front on pizzaSvc will make it a property of the class
  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit(): void {
    this.pizzaToppings = this.pizzaSvc.loadPizzaToppings();
  }

  //create new property pizzaToppings annotating it (type of) to a PizzaToppingDisplay[]
    //and initializing it to an empty []
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

  checkAll = () => {
    //iterate over all pizza toppings and transform them with map
    this.pizzaToppings = this.pizzaToppings.map(x => ({
      ...x, //spread in the pizza toppings their name, price, current check value
      checked: true
    }));
  }

  uncheckAll = () => {
        //iterate over all pizza toppings and transform them with map
        this.pizzaToppings = this.pizzaToppings.map(x => ({
          ...x,
          checked: false
        }));
  }
}
