import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../weather-data';
import { CdkAriaLive } from '@angular/cdk/a11y';
import { Observable } from 'rxjs';
import { A } from '@angular/cdk/keycodes';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [CdkAriaLive, AsyncPipe],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})

export class Weather {
  forecast$: Observable<WeatherData[]>;

  constructor(http: HttpClient) {
    this.forecast$ = http.get<WeatherData[]>('http://localhost:5201/weatherforecast');
  }
}
