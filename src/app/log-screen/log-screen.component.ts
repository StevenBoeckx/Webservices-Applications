import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-screen',
  templateUrl: './log-screen.component.html',
  styleUrls: ['./log-screen.component.css']
})
export class LogScreenComponent implements OnInit {

    numberOfsensors = 0;
  constructor() { }

  ngOnInit() {
  }
    onItemDrop(sensor: any) {
        this.numberOfsensors++;
        console.log(sensor.dragData);

    }

}
