// src/app/auth/auth.service.ts
import * as moment from 'moment';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class AuthService {
    private wdalogin = false;
    constructor(private http: HttpClient) {
        console.log('auth instance');
    }

    login(email: string, password: string) {
        return this.http.post('http://localhost/api/login', JSON.stringify({
            email: email,
            password: password
        }), {headers: new HttpHeaders().set('content-Type', 'application/json')})
            .subscribe(this.setSession,
                this.error);

    }

    private error(error) {
    console.log(error);
    }

    private setSession(authResult) {
        this.wdalogin = true;
        console.log("loggedin");
        console.log(this.wdalogin);
        const expiresAt = moment().add(authResult.expiresIn, 'second');

        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));

    }

    logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        this.wdalogin = false;
        console.log('logged out');
    }

    public isLoggedIn() {
        //console.log(moment().isBefore(this.getExpiration()));
        //console.log(this.getExpiration());
        //return moment().isBefore(this.getExpiration());
        console.log(this.wdalogin);
        return this.wdalogin;
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem('expires_at');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}
