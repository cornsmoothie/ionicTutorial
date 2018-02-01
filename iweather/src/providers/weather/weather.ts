import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import * as keys from '../apiKeys'; //sometimes you have to use this one(i had to on linux) vs. the line below idk why
import * as keys from '../apiKeys.js';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    console.log(keys.weatherUnderground);
    this.url = 'http://api.wunderground.com/api/' + keys.weatherUnderground + '/conditions/q'
  }

  getWeather(city , state) {
    return this.http.get(this.url + '/' + state + '/' + city + '.json')
    .map(result => result);
    // return this.http.get(this.url + '/' + state + '/' + city + '.json');
  }

}
