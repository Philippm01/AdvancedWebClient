import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from '../weather-data';
import { CdkAriaLive } from '@angular/cdk/a11y';

@Component({
  selector: 'app-weather',
  imports: [CdkAriaLive],
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})

export class Weather {
  forecast: WeatherData[] = [];
  constructor(http: HttpClient) {
    http.get<WeatherData[]>('http://localhost:5201/weatherforecast').subscribe(result => {  
      this.forecast = result;
    });
  }
}
