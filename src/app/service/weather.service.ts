import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey: string = 'appid=76d1b43ba3695cfae59aa9f7dc9b4877';
  baseURL = "https://api.openweathermap.org/data/2.5";
  param: string = "&units=metric"

  constructor(private http: HttpClient) {
    // this.URL = `/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getFind(cityName: string){
    return this.http.get(`${this.baseURL}/find?${this.apiKey}${this.param}&q=${cityName}`);
  }

  getWeather(cityName: string) {
    return this.http.get(`${this.baseURL}/weather?${this.apiKey}${this.param}&q=${cityName}`);
  }

  getForecast(idCity:string){
    return this.http.get(`${this.baseURL}/forecast?${this.apiKey}${this.param}&id=${idCity}`);
  }
}

