import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Ng2DragDropModule} from 'ng2-drag-drop';
import {SensorIdCartComponent} from './sensor-id-cart/sensor-id-cart.component';
import {LogWindowComponent} from './log-window/log-window.component';
import {LogScreenComponent} from './log-screen/log-screen.component';
import {ChartsModule} from 'ng2-charts';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './token.interceptor';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./auth.service";
import { SensDataManagementComponent } from './sens-data-management/sens-data-management.component';

const appRoutes: Routes = [{
    path: '', component: HomeComponent
},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'sensorLog', component: LogWindowComponent},
    {path: 'sensormanagement', component: SensDataManagementComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        SensorIdCartComponent,
        LogWindowComponent,
        LogScreenComponent,
        HomeComponent,
        LoginComponent,
        SignupComponent,
        SensDataManagementComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        Ng2DragDropModule.forRoot(),
        ChartsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
