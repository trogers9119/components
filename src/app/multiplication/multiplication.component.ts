import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberOne: number = 0;
  numberTwo: number = 0;

  public get total() {
    return this.numberOne * this.numberTwo;
  }

  
  
  
}
