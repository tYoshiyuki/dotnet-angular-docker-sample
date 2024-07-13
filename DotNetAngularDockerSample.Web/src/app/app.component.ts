import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherForecastService } from './weather-forecast.service';
import { WeatherForecast } from './weather-forecast';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'DotNetAngularDockerSample.Web';

  weatherForecasts : WeatherForecast[] = [];

  constructor (private weatherForecastService : WeatherForecastService) {  }

  ngOnInit(): void {
    this.weatherForecastService.getWeatherForecast()
      .subscribe(x => this.weatherForecasts = x);
  }
}
