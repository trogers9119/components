import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitar-gods',
  templateUrl: './guitar-gods.component.html',
  styleUrls: ['./guitar-gods.component.css']
})
export class GuitarGodsComponent implements OnInit {

  firstName = '';
  god;
  createGod = () => {
    if (this.firstName.substring(0,1) == 'a') {
      this.god = this.stevieIsYourGod();
    } else if (this.firstName.substring(0,1) == 'j') {
      this.god = this.jimmyIsYourGod();
    } else if (this.firstName.substring(0,1) == 'e') {
      this.god = this.nancyIsYourGod();
    } else {
      this.god = this.jimiIsYourGod();
    }
    console.log(this.firstName.substring(0,1))
  }

  stevieIsYourGod = () => {
    let steve = document.createElement("img");
    steve.src = "assets/stevieRayVaughn.png";
    document.body.appendChild(steve);
    let steveMsg = "You are Stevie Ray Vaughn... You are a GOD!";
    let steveElement = document.createElement("h3");
    steveElement.innerHTML = steveMsg;
    document.body.appendChild(steveElement);
  }

  jimmyIsYourGod = () => {
    let jimmy = document.createElement("img");
    jimmy.src = "assets/jimmyPage.png";
    document.body.appendChild(jimmy);
    let jimmyMsg = "You are Jimmy Page... You are a GOD!";
    let jimmyElement = document.createElement("h3");
    jimmyElement.innerHTML = jimmyMsg;
    document.body.appendChild(jimmyElement);
  }

  nancyIsYourGod = () => {
    let nancy = document.createElement("img");
    nancy.src = "assets/nancyWilson.png";
    document.body.appendChild(nancy);
    let nancyMsg = "You are Nancy Wilson... You are a GOD!";
    let nancyElement = document.createElement("h3");
    nancyElement.innerHTML = nancyMsg;
    document.body.appendChild(nancyElement);
  }

  jimiIsYourGod = () => {
    let jimi = document.createElement("img");
    jimi.src = "assets/jimiHendrix.png";
    document.body.appendChild(jimi);
    let jimiMsg = "You are Jimi Hendrix... You are a GOD!";
    let jimiElement = document.createElement("h3");
    jimiElement.innerHTML = jimiMsg;
    document.body.appendChild(jimiElement);
  }

  constructor() {}

  ngOnInit(): void {
  }

}
