import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor-id-cart',
  templateUrl: './sensor-id-cart.component.html',
  styleUrls: ['./sensor-id-cart.component.css']
})
export class SensorIdCartComponent implements OnInit {

  lastUpdated = 25;
  batterylevel = 50;
  ID=1;
  statusUpdating;
  statusBattery;
  constructor() { }

  ngOnInit() {
      if ( this.lastUpdated > 20 ) {
          this.statusUpdating = 'alert alert-danger';
      }
      else if (this.lastUpdated > 10 && this.lastUpdated < 20) {

          this.statusUpdating = 'alert alert-warning';
      }
      else {
          this.statusUpdating = 'alert alert-success';
      }

      if ( this.batterylevel > 30 ) {
          this.statusBattery = 'alert alert-success';
      }
      else if (this.batterylevel > 10 && this.batterylevel < 30) {

          this.statusBattery = 'alert alert-warning';
      }
      else {
          this.statusBattery = 'alert alert-danger';
      }
  }

}
