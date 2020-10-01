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

  //Type definition to describe what we want to return
  public loadPizzaToppings() : PizzaToppingDisplay[] {
    
    //Faux up some data that would really come from dominoes pizza web service/api
    const pizzaToppingsFromWebService = [
      { name: 'Pepperoni', price: 1.5 },
      { name: 'Olives', price: 2 }
    ];
    
    return pizzaToppingsFromWebService.map(x => ({
      ...x,
      checked: false  
    }));
  }
}
