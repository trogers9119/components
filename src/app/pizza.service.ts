import { Injectable } from '@angular/core';

export interface PizzaToppingDisplay {
  name: string;
  price: number;
  checked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  //pizzaService() {} in Java ???
  constructor() { }

public loadPizzaToppings(): pizzaToppingDisplay[] {
  
  //Faux up some data would really come from
  //Dominoes Pizza web service / API ...
  const pizzaToppingsFromWebService = [
    { name: 'Pepperoni', price: 1.5 }
    , { name: 'Olives', price: 2 }
  ];

  return pizzaToppingsFromWebService.map(x => ({
    ...x
    , checked: false
  }));
}

}
