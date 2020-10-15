import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitar-gods',
  templateUrl: './guitar-gods.component.html',
  styleUrls: ['./guitar-gods.component.css']
})
export class GuitarGodsComponent implements OnInit {

  firstName;
  displayGod = 'white';

  createDecider = () => {
    let theDecider = this.firstName.substring(0,1);
    return theDecider;
  }

  createGod = () => {
    
    let letter = this.createDecider();
    let lettersOne = ['a','e','i','m','q','u','y'];
    let lettersTwo = ['b','f','j','n','r','v','z'];
    let lettersThree = ['c','g','k','o','s','w'];
    let lettersFour = ['d','h','l','p','t','x'];
    let resultOne = lettersOne.includes(letter);
    let resultTwo = lettersTwo.includes(letter);
    let resultThree = lettersThree.includes(letter);
    let resultFour = lettersFour.includes(letter);

    switch (true) {
      case (resultOne):
        console.log(letter);
        this.displayGod = 'red';
        break;
      case (resultTwo): 
        this.displayGod = 'orange';
        break;
      case (resultThree): 
        this.displayGod = 'yellow';
        break;
      case (resultFour): 
        this.displayGod = 'green';
    } 
  }

  constructor() {}

  ngOnInit(): void {
  }

}
