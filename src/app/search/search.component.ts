import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../service/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  location = { cityName: '' };
  weather = undefined;
  teste: any = []
  constructor(private route: ActivatedRoute, private weatherService: WeatherService,
    private router: Router) { }

  ngOnInit() {
    this.getFind(this.location.cityName)
    this.getFind(this.teste)
    // console.log("this.teste", this.teste);



  }

  getFind(cityName: string) {
    this.weatherService
      .getFind(cityName)
      .subscribe(
        res => {
          console.log("console1", res);
          this.weather = res;
          this.teste = res
          // console.log("this.weather", res);
          // console.log("this.teste", res);
        },
        err => {
          console.log(err);
        }
      );
  }

  submitLocation(cityName: HTMLInputElement) {
    this.teste = cityName.value.toString()

    if (cityName.value) {
      this.getFind(cityName.value);

      cityName.value = '';
    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }
}
