import { Component, OnInit } from '@angular/core';\
import{PizzaService, pizzatoppingdisplay} from '../pizza.service'

@Component({
  selector: 'app-pizza-topping',
  templateUrl: './pizza-topping.component.html',
  styleUrls: ['./pizza-topping.component.css']
})
export class PizzaToppingComponent implements OnInit {

  constructor(public pizzaSvc: PizzaService) { }

  ngOnInit(): void {
  }

}
