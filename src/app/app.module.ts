import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent
  ],
  imports: [
    BrowserModule
    , FormsModule, BrowserAnimationsModule
    , MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
