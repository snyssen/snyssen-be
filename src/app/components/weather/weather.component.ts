import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { WeatherService } from './weather.service';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Component({
  selector: 'sny-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {

  currentWeather$: Observable<any>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    const geoTrackingEnabled = this.weatherService.initializeTracking();
    console.log('geoTrackingEnabled: ', geoTrackingEnabled);
    this.weatherService.getCurrentWeather('huy,be').pipe(
      catchError(err => { console.error(err); return of(null); }),
      tap(weather => console.log('weather: ', weather))
    ).subscribe();
  }

}
