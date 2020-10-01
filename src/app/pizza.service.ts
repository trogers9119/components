import { Injectable } from '@angular/core';

export interface pizzatoppingdisplay {
  name: string;
  price: Number;
  checked: Boolean;

}

@Injectable({
  providedIn: 'root'
})

export class PizzaService {

  constructor() { }

  public loadpizzatopping(): pizzatoppingdisplay[] {
    const pizzatoppingfromwebservice = [
      {name: 'peperoni', price: 1.5};
      {name: 'olives', price: 2}

    ];
    return pizzatoppingfromwebservice.map(x => ({
      ...x
      , checked: false;
    }))
  }
}
