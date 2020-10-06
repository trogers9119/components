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
  /**
   * loadPizzaTopings
  : PizzaToppingDisplay[] */
  public loadPizzaTopings(): PizzaToppingDisplay[] {

  const pizzaToppingFromWebService = [
    {name: 'Pepperoni', price: 1.5 },
    {name: 'Olives', price: 2 },
    {name: 'Pickle', price: 1 }
  ]
  return pizzaToppingFromWebService.map(x =>({
    ...x ,
    checked: false
  }));
  }
}
