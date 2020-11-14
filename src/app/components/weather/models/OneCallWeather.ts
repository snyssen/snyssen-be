// See https://openweathermap.org/api/one-call-api

export class OneCallWeather {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: OneCallCurrentWeather;
    minutely: OneCallMinutelyWeather[];
    hourly: OneCallHourlyWeather[];
    daily: OneCallDailyWeather[];
    alerts: OneCallAlert[];
}

export class OneCallCurrentWeather {
    dt: number;
    get dtAsDate(): Date { return this.dt ? new Date(this.dt) : null; }
    sunrise: number;
    get sunriseAsDate(): Date { return this.sunrise ? new Date(this.sunrise) : null; }
    sunset: number;
    get sunsetAsDate(): Date { return this.sunset ? new Date(this.sunset) : null; }
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    clouds: number;
    uvi: number;
    visibility: number;
    wind_speed: number;
    wind_gust?: number;
    wind_deg: number;
    rain: {
        '1h'?: number
    };
    snow: {
        '1h'?: number
    };
    weather: Weather[];
}

export class OneCallMinutelyWeather {
    dt: number;
    get dtAsDate(): Date { return this.dt ? new Date(this.dt) : null; }
    precipitation: number;
}

export class OneCallHourlyWeather {
    dt: number;
    get dtAsDate(): Date { return this.dt ? new Date(this.dt) : null; }
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_gust?: number;
    wind_deg: number;
    pop: number;
    rain: {
        '1h'?: number
    };
    snow: {
        '1h'?: number
    };
    weather: Weather[];
}

export class OneCallDailyWeather {
    dt: number;
    get dtAsDate(): Date { return this.dt ? new Date(this.dt) : null; }
    sunrise: number;
    get sunriseAsDate(): Date { return this.sunrise ? new Date(this.sunrise) : null; }
    sunset: number;
    get sunsetAsDate(): Date { return this.sunset ? new Date(this.sunset) : null; }
    temp: {
        morn: number,
        day: number,
        eve: number,
        night: number,
        min: number,
        max: number
    };
    feels_like: {
        morn: number,
        day: number,
        eve: number,
        night: number
    };
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_gust: number;
    wind_deg: number;
    clouds: number;
    uvi: number;
    visibility: number;
    pop: number;
    rain?: number;
    snow?: number;
    weather: Weather;
}

export class OneCallAlert {
    sender_name: string;
    event: string;
    start: number;
    get startAsDate(): Date { return this.start ? new Date(this.start) : null; }
    end: number;
    get endAsDate(): Date { return this.end ? new Date(this.end) : null; }
    description: string;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
