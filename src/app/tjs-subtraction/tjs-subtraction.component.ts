import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tjs-subtraction',
  templateUrl: './tjs-subtraction.component.html',
  styleUrls: ['./tjs-subtraction.component.css']
})
export class TjsSubtractionComponent implements OnInit {


  numberOne = 10;
  numberTwo = 5;
  answer = 5;

  subtractNumbers = () => {
    this.answer = this.numberOne - this.numberTwo;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
