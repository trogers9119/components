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

  constructor() { }

  public loadPizzaToppings(): PizzaToppingDisplay[] {
    const pizzaToppingsFromWebService = [
      { name: 'Pepperoni', price: 1.5 },
      { name: 'Olives', price: 2 }
    ];

    return pizzaToppingsFromWebService.map(x => ({
      ...x, checked: false
    }));
  }
}
