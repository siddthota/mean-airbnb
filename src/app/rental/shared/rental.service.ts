import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService {

constructor(private http: HttpClient) { }

public getRentals(): Observable<any> {
  return <any>this.http.get('/api/v1/rentals');

}

public getRentalById(rentalId): Observable<any> {
  return <any>this.http.get('/api/v1/rentals/'+rentalId);
}
  
}
