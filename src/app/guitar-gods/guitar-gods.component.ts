import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitar-gods',
  templateUrl: './guitar-gods.component.html',
  styleUrls: ['./guitar-gods.component.css']
})
export class GuitarGodsComponent implements OnInit {

  firstName;
  displayGod = 'white';

  createGod = () => {
    let theDecider = this.firstName.substring(0,1);
    let patternOne = /[aeimquy]/gi;
    let patternTwo = /[bfjnrvz]/gi;
    let patternThree = /[cgkosw]/gi;
    let patternFour = /[dhlptx]/gi;
    let resultOne = theDecider.match(patternOne).toString();
    let resultTwo = theDecider.match(patternOne).toString();
    let resultThree = theDecider.match(patternOne).toString();
    let resultFour = theDecider.match(patternOne).toString();
    console.log(resultOne);
    console.log(resultTwo);
    console.log(resultThree);
    console.log(resultFour);

    switch (theDecider) {
      case resultOne:
        this.displayGod = 'red';
        break;
      case 'b': 
        this.displayGod = 'orange';
        break;
      case 'c': 
        this.displayGod = 'yellow';
        break;
      case 'd': 
        this.displayGod = 'green';
        break;
      case 'e':
        this.displayGod = 'blue';
        break;
      case 'f':
        this.displayGod = 'indigo';
        break;
      case 'g': 
        this.displayGod = 'violet';
    } 
    console.log(theDecider);
    console.log(this.firstName.substring(0,1))
  }

  constructor() {}

  ngOnInit(): void {
  }

}
