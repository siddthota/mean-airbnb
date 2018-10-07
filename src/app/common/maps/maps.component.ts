import { Component, OnInit, Input } from '@angular/core';

import { MapService } from './maps.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  @Input() location: string;

  lat: number;
  lng: number;

  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  mapReadyHandler() {
    this.mapService.geocodeLocation(this.location).subscribe(
      (coordinates) => {
          this.lat = coordinates.lat;
          this.lng = coordinates.lng;
      }
    )
  }

}
