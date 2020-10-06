import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { PizzaTopingsComponent } from './pizza-topings/pizza-topings.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    PizzaTopingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
