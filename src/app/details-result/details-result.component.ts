import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-details-result',
  templateUrl: './details-result.component.html',
  styleUrls: ['./details-result.component.scss']
})
export class DetailsResultComponent implements OnInit {

  location: any = { idCity: 2643743 };
  weather = undefined;
  location2 = { cityName: 'Curitiba' };
  weather2 = undefined;

  constructor(private router: Router,private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getForecast(this.location.idCity)
    this.getWeather(this.location2.cityName)
  }

  getForecast(idCity: string) {
    this.weatherService
      .getForecast(idCity)
      .subscribe(
        res => {
          console.log("consoleForecast",res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  getWeather(cityName: string) {
    this.weatherService
      .getWeather(cityName)
      .subscribe(
        res => {
          console.log("consolegetWeather",res);
          this.weather2 = res;
        },
        err => {
          console.log(err);
        }
      );
  }
  submitLocation2(cityName: HTMLInputElement) {
    this.location2.cityName = cityName.value.toString()
   
   if (cityName.value) {
     this.getWeather(cityName.value);

     cityName.value = '';
   } else {
     alert('Please. Insert some values');
   }
   cityName.focus();
   return false;
 }

  submitLocation(idCity: HTMLInputElement) {
     this.location.idCity = idCity.value.toString()
    
    if (idCity.value) {
      this.getForecast(idCity.value);

      idCity.value = '';
    } else {
      alert('Please. Insert some values');
    }
    idCity.focus();
    return false;
  }
  // navigate():void{
  //   this.router.navigate( ['/resultTemp'] )
  // }

}
