import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {

  WeatherData: any;
  value: any;

  constructor() { }

  ngOnInit() {

    this.WeatherData = {
      main: {},
      isDay: true
    }

    // this.getWeatherData();
  }

  getCityName(item: any) {
    this.getWeatherData(item.value);
  }

  getWeatherData(value: any){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ value +'&APPID=794ee95e63c5a32aaf88cd813fa2e425')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})

    // let data = JSON.parse('{"coord":{"lon":3,"lat":28},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":290.65,"feels_like":289.29,"temp_min":290.65,"temp_max":290.65,"pressure":1018,"humidity":32,"sea_level":1018,"grnd_level":959},"visibility":10000,"wind":{"speed":7.37,"deg":46,"gust":7.9},"clouds":{"all":0},"dt":1669720998,"sys":{"country":"DZ","sunrise":1669702836,"sunset":1669740738},"timezone":3600,"id":2589581,"name":"Algeria","cod":200}');
    // this.setWeatherData(data);
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed();
  }
}
