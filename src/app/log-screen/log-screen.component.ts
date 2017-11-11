import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-log-screen',
    templateUrl: './log-screen.component.html',
    styleUrls: ['./log-screen.component.css']
})
export class LogScreenComponent implements OnInit {

    numberOfsensors = 0;
    idSensors = [];
    lineChartData = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    lineChartType = 'line';

    constructor() {
    }

    ngOnInit() {
    }

    onItemDrop(sensor: any) {
        this.numberOfsensors++;
        this.idSensors.push(sensor.dragData);

    }

    chartClicked(e: any) {
        console.log(e);
    }

    chartHovered(e: any) {
        console.log(e);
    }

}
