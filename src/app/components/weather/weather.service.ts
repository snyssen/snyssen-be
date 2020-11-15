import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { GeolocationService, GEOLOCATION_SUPPORT } from '@ng-web-apis/geolocation';
import { catchError, tap } from 'rxjs/operators';
import { Delayer } from 'src/app/helpers/Delayer';
import { environment } from 'src/environments/environment';
import { CityAndCountryInfo } from './models/CityAndCountryInfo';
import { OneCallWeather } from './models/OneCallWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly GEOLOCATION_NO_SUPPORT_MESSAGE = 'Either your browser does not support geolocation of you have not authorized this website to use that feature.';
  private readonly GEOLOCATION_NOT_READY_MESSAGE = 'The geolocation tracking service could not be started.';
  private readonly WEATHER_CACHE_STORAGE_BASE_NAME = 'weather-cache';
  private readonly WEATHER_CACHE_EXPIRATION = 60; // expiration in minute
  private readonly CITY_CACHE_STORAGE_BASE_NAME = 'city-cache'; // This cache doesn't expire

  private _trackingInitialized = false;
  private _geolocationSnapshot: Position;

  constructor(private readonly geolocation$: GeolocationService,
              @Inject(GEOLOCATION_SUPPORT) private readonly geolocationSupport: boolean,
              private httpClient: HttpClient) {
    this.initializeTracking();
  }

  initializeTracking(): 'ready' | 'no-support' | 'not-ready' {
    if (!this._trackingInitialized) {
      if (this.geolocationSupport === true) {
        console.debug('Starting geotracking');
        this.geolocation$.pipe(
          tap(position => console.debug('New position acquired: ', position))
        ).subscribe(position => this._geolocationSnapshot = position);
      }
      this._trackingInitialized = true;
    }
    if (this.geolocationSupport === false) { return 'no-support'; }
    return this._geolocationSnapshot !== undefined && this._geolocationSnapshot !== null ?
      'ready' : 'not-ready';
  }

  private async tryWaitForGeoTracking(maxAttempts: number = 3, delay: number = 150, incrementDelay: boolean = true): Promise<'ready' | 'no-support' | 'not-ready'> {
    let attempts = 0; let status: 'ready' | 'no-support' | 'not-ready' = 'not-ready';
    while (status === 'not-ready' && attempts < maxAttempts) {
      if (attempts > 0) {
        await Delayer.delay(incrementDelay ? attempts * delay : delay);
      }
      status = this.initializeTracking();
      attempts++;
    }
    return status;
  }

  private getWeatherCacheKey(lat: number, lon: number): string {
    return this.WEATHER_CACHE_STORAGE_BASE_NAME + '_' + lat + '_' + lon;
  }

  private tryGetWeatherFromCache(lat: number, lon: number): OneCallWeather {
    const cacheValue = localStorage.getItem(this.getWeatherCacheKey(lat, lon));
    if (!cacheValue) { return null; }
    const weather: OneCallWeather = JSON.parse(cacheValue);
    if (!weather || !weather.current || !weather.current.dt) { return null; }
    // check cache expiration
    const lastQueryTimestamp = weather.current.dt.toDate();
    if (lastQueryTimestamp.setMinutes(
      lastQueryTimestamp.getMinutes() + this.WEATHER_CACHE_EXPIRATION
    ) < new Date().getTime()) { // cache not expired
      return weather;
    } else { return null; }
  }

  private setWeatherInCache(weather: OneCallWeather): void {
    localStorage.setItem(
      this.getWeatherCacheKey(weather.lat, weather.lon),
      JSON.stringify(weather)
    );
  }

  async getWeather(unit: 'standard' | 'metric' | 'imperial' = 'metric'): Promise<OneCallWeather> {
    return new Promise<OneCallWeather>(async (resolve, reject) => {
      // Check if user has geolocation active (with wait and retries)
      const status = await this.tryWaitForGeoTracking();
      switch (status) {
        case 'no-support':
          reject(new Error(this.GEOLOCATION_NO_SUPPORT_MESSAGE));
          return;
        case 'not-ready':
          reject(new Error(this.GEOLOCATION_NOT_READY_MESSAGE));
          return;
        default:
          break;
      }
      // check if value is available in cache
      const weather = this.tryGetWeatherFromCache(
        this._geolocationSnapshot.coords.latitude,
        this._geolocationSnapshot.coords.longitude
      );
      if (weather) { resolve(weather); return; } // value in cache, return
      // get from API
      this.httpClient.get(
        environment.openWeatherMap.baseUri + '/onecall?lat='
        + this._geolocationSnapshot.coords.latitude
        + '&lon=' + this._geolocationSnapshot.coords.longitude
        + '&units=' + unit
        + '&appid=' + environment.openWeatherMap.apiKey
      ).pipe(
        catchError((err) => {
          reject(err);
          return null;
        })
      ).subscribe((response: OneCallWeather) => {
        if (response) {
          // save result in cache
          this.setWeatherInCache(response);
          resolve(response);
          return;
        }
        reject(new Error('Invalid or empty response'));
      });
    });
  }

  private getCityCacheKey(lat: number, lon: number): string {
    return this.CITY_CACHE_STORAGE_BASE_NAME + '_' + lat + '_' + lon;
  }

  private tryGetCityFromCache(lat: number, lon: number): CityAndCountryInfo {
    const cacheValue = localStorage.getItem(this.getCityCacheKey(lat, lon));
    if (!cacheValue) { return null; }
    return JSON.parse(cacheValue);
  }

  private setCityInCache(cityInfo: CityAndCountryInfo, lat: number, lon: number): void {
    localStorage.setItem(
      this.getCityCacheKey(lat, lon),
      JSON.stringify(cityInfo)
    );
  }

  async getCityAndCountryInfo(): Promise<CityAndCountryInfo> {
    return new Promise<CityAndCountryInfo>(async (resolve, reject) => {
      // Check if user has geolocation active (with wait and retries)
      const status = await this.tryWaitForGeoTracking();
      switch (status) {
        case 'no-support':
          reject(new Error(this.GEOLOCATION_NO_SUPPORT_MESSAGE));
          return;
        case 'not-ready':
          reject(new Error(this.GEOLOCATION_NOT_READY_MESSAGE));
          return;
        default:
          break;
      }
      // check if value is available in cache
      const cityInfo = this.tryGetCityFromCache(
        this._geolocationSnapshot.coords.latitude,
        this._geolocationSnapshot.coords.longitude
      );
      if (cityInfo) { resolve(cityInfo); return; } // value in cache, return
      // get from API
      this.httpClient.get(
        environment.reverseGeocodeBaseUri
        + '?latitude=' + this._geolocationSnapshot.coords.latitude
        + '&longitude=' + this._geolocationSnapshot.coords.longitude
      ).pipe(
        catchError((err) => {
          reject(err);
          return null;
        })
      ).subscribe((response: CityAndCountryInfo) => {
        if (response) {
          // save result in cache
          this.setCityInCache(
            response,
            this._geolocationSnapshot.coords.latitude,
            this._geolocationSnapshot.coords.longitude
          );
          resolve(response);
          return;
        }
        reject(new Error('Invalid or empty response'));
      });
    });
  }
}
