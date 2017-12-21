import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    httpLoginObs: Observable<any>;
    email = '';
    password = '';

    constructor(private http: HttpClient, private auth: AuthService) {
    }

    ngOnInit() {
    }

    login() {
        this.auth.login(this.email, this.password);

        /* this.httpLoginObs = this.http.post('http://localhost/login'
             , JSON.stringify(this.user), {headers: new HttpHeaders().set('content-Type', 'application/json')}
         );
         this.httpLoginObs.subscribe(
             (data) => {
                 console.log(data);
             },
             (err: HttpErrorResponse) => {
                 console.log(err);
             },
             () => {
             }
         )*/
    }
}
