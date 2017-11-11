import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Ng2DragDropModule } from 'ng2-drag-drop';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
      Ng2DragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
