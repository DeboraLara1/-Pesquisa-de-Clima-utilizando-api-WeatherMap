import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetalhesSharedService {

  constructor() { }
  getSelectedFilms() {
    return Object.entries(JSON.parse(localStorage.getItem("info")))
  }
  setSelected(info: any) {
    var existingData
    existingData.getItem(info);
    // getItem("selectedFilms")
  }
}
