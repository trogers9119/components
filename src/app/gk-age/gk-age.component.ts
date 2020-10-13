import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gk-age',
  templateUrl: './gk-age.component.html',
  styleUrls: ['./gk-age.component.css']

})
export class GkAgeComponent implements OnInit {
  public selectedAge: Date;
  public age: number;
  constructor() { }

  ngOnInit(): void {
  }
  public CalculateAge(): void
     {
         if(this.selectedAge){
            var timeDiff = Math.abs(Date.now() - new Date(this.selectedAge).getTime());
            //Used Math.floor instead of Math.ceil
            //so 26 years and 140 days would be considered as 26, not 27.
            this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
        }
    }

}
