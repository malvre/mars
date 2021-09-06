import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.page.html',
  styleUrls: ['./photo-list.page.scss'],
})
export class PhotoListPage implements OnInit {
  photos: any[];
  selectedData: any;

  constructor(
    private nasaService: NasaService,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController
  ) {
    this.selectedData = this.nasaService.getSelectedData();
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const loading = await this.loadingCtrl.create();
    loading.present();

    try {
      const { rover, camera, date } = this.selectedData;
      const res = await this.nasaService.getPhotos(rover, camera, date);
      console.log(res);
      this.photos = res.photos;
    } catch (error) {
      console.log(error);
    } finally {
      loading.dismiss();
    }
  }

  showPhoto(photo) {
    this.nasaService.setSelectedPhoto(photo.img_src);
    this.navCtrl.navigateForward('/photo-detail');
  }
}
