import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-log-screen',
    templateUrl: './log-screen.component.html',
    styleUrls: ['./log-screen.component.css']
})
export class LogScreenComponent implements OnInit {

    @ViewChild('baseChart') chart;
    numberOfsensors = 0;
    idSensors = [];
    lineChartData = [];
    lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    lineChartType = 'line';

    constructor() {
    }

    ngOnInit() {
    }

    SensoralreadyDisplayed(obj) {
        let i = this.idSensors.length;
        while (i--) {
            if (this.idSensors[i] === obj) {
                return false;
            }
        }
        return true;
    }

    onItemDrop(sensor: any) {
        if (this.SensoralreadyDisplayed(sensor.dragData)) {
            this.numberOfsensors++;
            this.idSensors.push(sensor.dragData);
            this.lineChartData.push({
                data: [(Math.random() * 100), 59, (Math.random() * 100), 20, (Math.random() * 100), (Math.random() * 100), 40],
                label: 'sensor' + (sensor.dragData as string)
            });
            if (this.chart !== undefined) {
                this.chart.ngOnDestroy();
                this.chart.chart = this.chart.getChartBuilder(this.chart.ctx);
            }
        }
    }

    chartClicked(e: any) {
        console.log(e);
    }

    chartHovered(e: any) {
        console.log(e);
    }


}
