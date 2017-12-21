import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    router;

    constructor(private _router: Router, public auth: AuthService) {
        this.router = _router;
        console.log(this.router.url);
    }

    sensors = [1, 4, 23, 40];
    title = 'app';
}
