import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {Ng2DragDropModule} from 'ng2-drag-drop';
import {SensorIdCartComponent} from './sensor-id-cart/sensor-id-cart.component';
import {LogWindowComponent} from './log-window/log-window.component';
import {LogScreenComponent} from './log-screen/log-screen.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
    declarations: [
        AppComponent,
        SensorIdCartComponent,
        LogWindowComponent,
        LogScreenComponent,
    ],
    imports: [
        BrowserModule,
        Ng2DragDropModule.forRoot(),
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
