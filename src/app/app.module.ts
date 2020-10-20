import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import { ServiceSelectComponent } from './service-select/service-select.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TjsSubtractComponent } from './tjs-subtract/tjs-subtract.component';
import { GuitarGodsComponent } from './guitar-gods/guitar-gods.component';
import { MatInputModule } from '@angular/material/input';
import { MultiplicationComponent } from './multiplication/multiplication.component';
import { TipCalculatorComponent } from './tip-calculator/tip-calculator.component';
import { TimeComponent } from './time/time.component';
import { MatSelectModule } from '@angular/material/select';
import { TjsSubtractionComponent } from './tjs-subtraction/tjs-subtraction.component';
import { SpecialRequestComponent } from './special-request/special-request.component';
import { GkAgeComponent } from './gk-age/gk-age.component';
import { DonationComponent } from './donation/donation.component';
import { MathComponent } from './math/math.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    TjsSubtractComponent,
    TjsSubtractionComponent,
    GuitarGodsComponent,
    MultiplicationComponent,
    TipCalculatorComponent,
    TimeComponent,
    ServiceSelectComponent,
    TjsSubtractionComponent,
    SpecialRequestComponent,
    GkAgeComponent,
    DonationComponent,
    MathComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , BrowserAnimationsModule
    , MatCardModule
    , MatCheckboxModule
    , MatButtonModule
    , MatSelectModule
    , MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
