import { Component, OnInit } from '@angular/core';
// import { time } from 'console';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

public time;

public  generateTime(){
  const currentTime = new Date();
  let hh = currentTime.getHours();
  let mm = currentTime.getMinutes();
  let ss = currentTime.getSeconds();
  let formattedDate = hh + ":"+ this.formatTime(mm) + ":" + this.formatTime(ss);
  this.time = formattedDate;
}

public formatTime(time) {
  if(time < 10) {
    return `0${time}`;
  } 
  return time;
}

public updateTime(){
  this.generateTime();
  setInterval(this.generateTime, 1000);
}
}

    

