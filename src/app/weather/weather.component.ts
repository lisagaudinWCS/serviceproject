import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { TimeoutError } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  city!: string;
  weather!: any;

  constructor(private weatherService: WeatherService) { }

  searchWeather(): void {
    this.weatherService.getWeather(this.city).subscribe(toto => {
      this.weather = {
        description: toto.weather,
        main: toto.main
      }
    });     
  }
}
