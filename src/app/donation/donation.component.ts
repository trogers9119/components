import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  numberOne = 0;
  numberTwo = 0;
  answer = 0;
  divideNumbers = () => {
    this.answer = this.numberOne / this.numberTwo;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
