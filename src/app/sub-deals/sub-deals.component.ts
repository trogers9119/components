import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sub-deals',
  templateUrl: './sub-deals.component.html',
  styleUrls: ['./sub-deals.component.css']
})
export class SubDealsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

email = {name: "",
         showWords: false};

emailbox = {show: true};


getEmail = () => {
  
  this.emailbox.show = false;
  this.email.showWords = true;  //works
  console.log(this.email.name);

}




}
