import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';

import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dateMax: string;
  rovers: any[];
  cameras: any[];

  form = {
    rover: '',
    camera: '',
    date: '',
  };
  constructor(
    private nasaService: NasaService,
    private navCtrl: NavController
  ) {
    this.form.date = new Date(
      new Date().getTime() - 24 * 60 * 60 * 1000 * 2
    ).toISOString();

    this.dateMax = this.form.date;

    this.rovers = this.nasaService.getRovers();
  }

  ngOnInit() {}

  selectRover(event) {
    this.form.rover = event.target.value;

    this.loadCameras();
  }

  loadCameras() {
    this.cameras = this.rovers.filter(
      (rover) => rover.id === this.form.rover
    )[0].cameras;
  }

  isValidForm() {
    const { rover, camera, date } = this.form;

    return rover && camera && date;
  }

  goPhotos() {
    let { rover, camera, date } = this.form;
    date = date.slice(0, 10);
    this.nasaService.setSelectedData(rover, camera, date);
    this.navCtrl.navigateForward('photo-list');
  }
}
