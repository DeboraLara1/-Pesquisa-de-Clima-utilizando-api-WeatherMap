import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-resultado-tempo',
  templateUrl: './resultado-tempo.component.html',
  styleUrls: ['./resultado-tempo.component.scss']
})
export class ResultadoTempoComponent implements OnInit {

  constructor(private weatherService: WeatherService,
    private router: Router) { }

  ngOnInit() {

  }


  navigateTodetailTemp(): void {
    this.router.navigate(['resultTemp/detailTemp'])
  }
}


