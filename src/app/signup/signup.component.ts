import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email='';
  password='';
  name='';
  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
  }
  signupNewuser()
  {
  this.http.post('http://localhost/api/signup'
          , JSON.stringify({email: this.email , password: this.password, name:this.name}), {headers: new HttpHeaders().set('content-Type', 'application/json')}
      ).subscribe(
          (data) => {
              let correctRedirectPath = '/sensorLog';
              this.auth.login(this.email, this.password, correctRedirectPath);
          },
          (err: HttpErrorResponse) => {
              console.log(err);
          },
          () => {
          }
  );

  }

}
