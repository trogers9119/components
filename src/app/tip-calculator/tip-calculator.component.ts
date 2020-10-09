import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {

  total;
  tipPercentage;
  tipAmount;

  calculateTip = () => {
    this.tipAmount = this.total * this.tipPercentage;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
