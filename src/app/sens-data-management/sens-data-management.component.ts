import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders,HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-sens-data-management',
  templateUrl: './sens-data-management.component.html',
  styleUrls: ['./sens-data-management.component.css']
})
export class SensDataManagementComponent implements OnInit {
  sensors : {id: number, sensorID: string, sensortype: string , sensordata: number, batteryPercentage: number}[] = [] ;
  constructor(private http: HttpClient) { }
  newSensordata: {id: number, sensorID: string, sensortype: string , sensordata: number, batteryPercentage: number}={};
    refreshdata()
    {
        this.http.get('http://localhost/api/admindatamanagement', {headers: new HttpHeaders().set('content-Type', 'application/json')})
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

  ngOnInit() {
      this.refreshdata();

  }
  deletedata(sensorid: number)
  {
console.log("deletedata" + sensorid);
      this.http.delete('http://localhost/api/admindatamanagement/'+sensorid)
          .subscribe(
              (data) => {
                  //console.log(data);

              },
              (err: HttpErrorResponse) => {
                  console.log(err);
              },
              () => {
              }
          );
 this.refreshdata();
  }

  adddata()
  {
      this.http.post('http://localhost/api/admindatamanagement', JSON.stringify(
          this.newSensordata
      ), {headers: new HttpHeaders().set('content-Type', 'application/json')})
          .subscribe(
              (data) => {
                  this.refreshdata();
                  console.log(data);
              },
              (err: HttpErrorResponse) => {
                  console.log(err);
              },
              () => {
              }
          );

  }


}
