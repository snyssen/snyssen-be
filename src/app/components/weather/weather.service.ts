import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { GeolocationService, GEOLOCATION_SUPPORT } from '@ng-web-apis/geolocation';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly GEOLOCATION_ERROR = new Error('Either your browser does not support geolocation of you have not authorized this website to use that feature. If you don\'t want to use geolocation, please enter a fallback city');

  private _trackingInitialized = false;
  private _geolocationSnapshot: Position;

  constructor(private readonly geolocation$: GeolocationService,
              @Inject(GEOLOCATION_SUPPORT) private readonly geolocationSupport: boolean,
              private httpClient: HttpClient) { }

  initializeTracking(): boolean {
    if (!this._trackingInitialized) {
      if (this.geolocationSupport === true) {
        this.geolocation$.subscribe(position => this._geolocationSnapshot = position);
      }
      this._trackingInitialized = true;
    }
    return this._trackingInitialized && this.geolocationSupport;
  }

  getCurrentWeather(fallbackCity?: string, units: 'standard' | 'metric' | 'imperial' = 'metric'): Observable<any> {
    let uri = environment.openWeatherMap.baseUri + '/weather?';
    if (!this._geolocationSnapshot || !this._geolocationSnapshot) {
      if (!fallbackCity) { return throwError(this.GEOLOCATION_ERROR); }
      uri += 'q=' + fallbackCity;
    } else {
      uri += 'lat=' + this._geolocationSnapshot.coords.latitude + '&lon=' + this._geolocationSnapshot.coords.longitude;
    }
    uri += '&appid=' + environment.openWeatherMap.apiKey;
    console.log('uri: ', uri);
    return this.httpClient.get(uri);
  }
}
