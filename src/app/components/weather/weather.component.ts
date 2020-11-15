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
  get currentWeatherFAIconName(): string {
    if (!this.currentWeather.weather || this.currentWeather.weather.length <= 0) {
      return null;
    }
    let iconName: string;
    // see codes here -> https://openweathermap.org/weather-conditions
    switch (this.currentWeather.weather[0].icon) {
      case '01d':
        iconName = 'sun';
        break;
      case '01n':
        iconName = 'moon';
        break;
      case '02d':
        iconName = 'cloud-sun';
        break;
      case '02n':
        iconName = 'cloud-moon';
        break;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        iconName = 'cloud';
        break;
      case '09d':
      case '09n':
        iconName = 'cloud-showers-heavy';
        break;
      case '10d':
        iconName = 'cloud-sun-rain';
        break;
      case '10n':
        iconName = 'cloud-moon-rain';
        break;
      case '11d':
      case '11n':
        iconName = 'bolt';
        break;
      case '13d':
      case '13n':
        iconName = 'snowflake';
        break;
      case '50d':
      case '50n':
        iconName = 'smog';
        break;
    }
    return iconName;
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
