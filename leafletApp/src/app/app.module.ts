import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MyMapComponent } from './my-map/my-map.component';
import { MapService } from './map.service';


@NgModule({
  declarations: [
    AppComponent,
    MyMapComponent
  ],
  imports: [
    BrowserModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
