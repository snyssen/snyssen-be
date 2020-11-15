import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WeatherService } from './weather.service';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { OneCallCurrentWeather, OneCallWeather } from './models/OneCallWeather';
import { CityAndCountryInfo } from './models/CityAndCountryInfo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'sny-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  loading = true;
  error = false;
  oneCallWeather: OneCallWeather;
  cityAndCountryInfo: CityAndCountryInfo;
  get currentWeatherIconUri(): string {
    if (!this.oneCallWeather.current.weather || this.oneCallWeather.current.weather.length <= 0) {
      return null;
    }
    return environment.openWeatherMap.iconsBaseUri
    // get day only icon as night icons don't look good on dark theme
      + this.oneCallWeather.current.weather[0].icon.slice(0, -1) + 'd'
      + environment.openWeatherMap.iconsExt;
  }
  get currentWeather(): OneCallCurrentWeather {
    if (!this.oneCallWeather) { return null; }
    return this.oneCallWeather.current;
  }

  constructor(private weatherService: WeatherService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.oneCallWeather = await this.weatherService.getWeather();
    } catch (err) {
      console.error(err);
      this.error = true;
    }
    try {
      this.cityAndCountryInfo = await this.weatherService.getCityAndCountryInfo();
    } catch (err) {
      console.error(err);
      this.error = true;
    }
    this.loading = false;
  }

}
