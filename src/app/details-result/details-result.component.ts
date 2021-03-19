import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-details-result',
  templateUrl: './details-result.component.html',
  styleUrls: ['./details-result.component.scss']
})
export class DetailsResultComponent implements OnInit {

  location: any = { idCity: '' };
  weather = undefined;
  location2 = { cityName: '' };
  weather2 = undefined;
  testeinfo

  constructor(private activevatedRoute: ActivatedRoute, private router: Router, private weatherService: WeatherService) { }

  ngOnInit(): void {
    console.log("testeinfo", this.testeinfo)
    console.log('id cidade', this.activevatedRoute.snapshot.params.id);
    console.log('id cidade', this.activevatedRoute.snapshot.params.name);
    console.log('getForecast', this.location.idCity)
    console.log('getWeather', this.location2.cityName)
    this.getForecast(this.location.idCity)
    this.getWeather(this.location2.cityName)
  }

  getForecast(idCity: string) {
    this.weatherService
      .getForecast(this.activevatedRoute.snapshot.params.id)
      .subscribe(
        res => {
          console.log("consoleForecast", res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  getWeather(cityName: string) {
    this.weatherService
      .getWeather(this.activevatedRoute.snapshot.params.name)
      .subscribe(
        res => {
          console.log("consolegetWeather", res);
          this.weather2 = res;
          console.log("consolegetWeather", this.weather2 = res);
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
