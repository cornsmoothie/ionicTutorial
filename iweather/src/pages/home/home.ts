import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // constructor(public navCtrl: NavController) { this is the default one
  constructor(public navCtrl: NavController , private weatherProvider: WeatherProvider) { // this is the new one

  }

}
