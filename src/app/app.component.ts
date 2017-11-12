import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    sensors = [ 1 , 4 , 23 , 40 ];
  title = 'app';
}
