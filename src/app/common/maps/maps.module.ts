import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps.component';

import { MapService } from './maps.service';


//Google Maps API Key - https://console.developers.google.com/google/maps-apis/apis/maps-ios-backend.googleapis.com/credentials?project=airbnb-angular&duration=PT1H

@NgModule({
  declarations: [
  MapsComponent
  ],
  exports: [
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBk2mvVmCZi3FDeRh27FvJKmD_77o43iJw'
      })

  ],
  providers: [MapService],
  bootstrap: []
})
export class MapsModule { }
