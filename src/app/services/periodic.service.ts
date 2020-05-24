import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ELEMENT_DATA } from '../models/periodic-element-work';

@Injectable({
  providedIn: 'root'
})
export class PeriodicService {

  constructor(private http: HttpClient) { }

  getPeriodicElements() {
    return of(ELEMENT_DATA)
  }
}
