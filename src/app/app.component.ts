import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    router;
    sensors: {sensorID: string, sensortype: string , sensordata: number, batteryPercentage: number};
    constructor(private _router: Router, public auth: AuthService, private http: HttpClient) {
        this.router = _router;
        console.log(this.router.url);
    }

    getAvailableSensors()
    {
        console.log("gettingsensordata");
        this.http.get('http://localhost/api/sensors', {headers: new HttpHeaders().set('content-Type', 'application/json')})
            .subscribe(
            (data) => {
                //console.log(data);
                this.sensors = data as any;
                console.log(this.sensors[0]);

            },
            (err: HttpErrorResponse) => {
                console.log(err);
            },
            () => {
            }
            );


    }

    title = 'app';
}
