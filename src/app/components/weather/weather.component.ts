import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WeatherService } from './weather.service';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { OneCallWeather } from './models/OneCallWeather';

@Component({
  selector: 'sny-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {

  oneCallWeather: OneCallWeather;

  constructor(private weatherService: WeatherService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.oneCallWeather = await this.weatherService.getWeather();
      console.log('this.oneCallWeather: ', this.oneCallWeather);
    } catch (err) {
      console.error(err);
    }
  }

}
