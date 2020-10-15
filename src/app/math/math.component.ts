import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  numberOne = 20;
  numberTwo = 3;
  numberThree = 1;
  answer = 24;

  subtractNumbers = () => {
    this.answer = this.numberOne + this.numberTwo + this.numberThree;
  }

}
