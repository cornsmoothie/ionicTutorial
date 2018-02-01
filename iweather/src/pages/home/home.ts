import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather:any;

  location:{
    city:string,
    state:string;
  }

  // constructor(public navCtrl: NavController) { this is the default one
  constructor(public navCtrl: NavController , private weatherProvider: WeatherProvider) { // this is the new one

  }

  // willEnter() {
  ionViewWillEnter() {
    this.location = {
      city: "Philadelphia",
      state: "PA"
    }
    const testing = this;
    // this.weatherProvider.getWeather(this.location.city , this.location.state).subscribe(retrievedWeather => {console.log(retrievedWeather.current_observation);});
    // this.weatherProvider.getWeather(this.location.city , this.location.state).subscribe(retrievedWeather => {console.log(retrievedWeather);});

    // this.weather = this.weatherProvider.getWeather(this.location.city , this.location.state).subscribe(retrievedWeather => {
    //   this.weather = retrievedWeather;
    //   console.log(this.location);
    //   console.log(this.weather);
    //   return this.weather;
    // });

    // this.weatherProvider.getWeather(this.location.city , this.location.state).subscribe(retrievedWeather => {
    //   console.log(this);
    //   this.weather = retrievedWeather;
    //   console.log(this.weather);
    // });

    this.weatherProvider.getWeather(this.location.city , this.location.state).subscribe(retrievedWeather => {
      console.log(this);
      this.weather = retrievedWeather.current_observation;
      console.log(this.weather);
    });

    // this.weatherProvider.getWeather(this.location.city , this.location.state).subscribe(this.weatherHandler(retrievedWeather));

    // this.weatherProvider.getWeather(this.location.city , this.location.state).subscribe(retrievedWeather => {
    //   testing = retrievedWeather;
    //   console.log(testing);
    // });
    var storedThis = this;
    console.log(this);
    console.log(this.location);
    console.log(this.weather);
    console.log(storedThis.weather);
    console.log(storedThis);
    console.log(testing.weather);
    // console.log(testing);
  }
}
