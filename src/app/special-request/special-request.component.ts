import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-request',
  templateUrl: './special-request.component.html',
  styleUrls: ['./special-request.component.css']
})
export class SpecialRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  getspecialRequest = () => {


document.write("Your Request has been added successfully!!!!");

  }
}
