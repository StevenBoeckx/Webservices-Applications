import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Ng2DragDropModule } from 'ng2-drag-drop';
import { SensorIdCartComponent } from './sensor-id-cart/sensor-id-cart.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SensorIdCartComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
      Ng2DragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
