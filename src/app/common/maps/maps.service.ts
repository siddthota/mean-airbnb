import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MapService {

    private geoCoder;

    public geocodeLocation(location: string): Observable<any> {
		this.geoCoder = new (<any>window).google.maps.Geocoder(); 

		return new Observable((observer) => {
			this.geoCoder.geocode({address: location}, (result, status) => {
				if (status === 'OK') {

					const geometry = result[0].geometry.location;
					const coordinates = {lat: geometry.lat(), lng: geometry.lng()};

					// this.cacheLocation(location, coordinates);
					observer.next(coordinates);
				} else {
					observer.error('Location could not be geocoded');
				}
			});
		});
	}
    

}