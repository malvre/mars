import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { ROVERS } from '../rovers';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private selectedData: any;
  private selectedPhoto: string;

  constructor(private http: HttpClient) {}

  getRovers() {
    return ROVERS;
  }

  getPhotos(rover: string, camera: string, date: string): Promise<any> {
    const queries = [];
    queries.push(`camera=${camera}`);
    queries.push(`earth_date=${date}`);
    queries.push(`api_key=${env.api_key}`);
    queries.push(`page=1`);

    return this.http
      .get(`${env.api_url}/${rover}/photos?${queries.join('&')}`)
      .toPromise();
  }

  setSelectedData(rover: string, camera: string, date: string) {
    this.selectedData = {
      rover,
      camera,
      date,
    };
  }

  getSelectedData() {
    return this.selectedData;
  }

  setSelectedPhoto(photo) {
    this.selectedPhoto = photo;
  }

  getSelectedPhoto() {
    return this.selectedPhoto;
  }
}
