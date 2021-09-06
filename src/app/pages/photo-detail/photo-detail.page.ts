import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/services/nasa.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.page.html',
  styleUrls: ['./photo-detail.page.scss'],
})
export class PhotoDetailPage implements OnInit {
  photo: string;

  constructor(private nasaService: NasaService) {
    this.photo = this.nasaService.getSelectedPhoto();
  }

  ngOnInit() {}
}
