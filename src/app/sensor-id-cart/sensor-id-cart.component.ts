import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-sensor-id-cart',
    templateUrl: './sensor-id-cart.component.html',
    styleUrls: ['./sensor-id-cart.component.css']
})
export class SensorIdCartComponent implements OnInit {
    @Input() ID: {sensorID: string, sensortype: string , sensordata: number, batteryPercentage: number};
    lastUpdated = 25;
    batterylevel = 50;
    statusUpdating;
    statusBattery;
    constructor() {
    }

    ngOnInit() {
        if (this.lastUpdated > 20) {
            this.statusUpdating = 'alert alert-danger';
        }
        else if (this.lastUpdated > 10 && this.lastUpdated < 20) {

            this.statusUpdating = 'alert alert-warning';
        }
        else {
            this.statusUpdating = 'alert alert-success';
        }

        if (this.ID.batteryPercentage > 30) {
            this.statusBattery = 'alert alert-success';
        }
        else if (this.ID.batteryPercentage > 10 && this.ID.batteryPercentage < 30) {

            this.statusBattery = 'alert alert-warning';
        }
        else {
            this.statusBattery = 'alert alert-danger';
        }
    }

}
