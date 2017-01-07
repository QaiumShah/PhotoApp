import { Injectable } from '@angular/core';
import { Photo } from './entities/photo';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PhotoLibraryService {
  constructor(private http:Http) {
  }

  public getPhotos(): Promise<Photo[]> {
    if (this.photos.length > 0) {
      return Promise.resolve(this.photos);
    } else {
      return this.http.get('assets/photos.json')
        .toPromise()
        .then(res => {
          this.photos = res.json();
          return this.photos;
        });
    }
  }

  public getPhoto(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.getPhotos().then(photos => {
        let index = photos.findIndex((photo: Photo) => photo.id === id);
        if (index > -1) {
          resolve(photos[index]);
          return ;
        }
        resolve(null);
      });
    });
  }

  public addPhoto(photo: Photo): Promise<any[]> {
    return this.getPhotos().then((photos) => {
      // Do not change the existing `photos` array.
      // `photos` will be a new array after adding a new photo.
      this.photos = photos.slice(0);
      this.photos.unshift(photo);
      return this.photos;
    });
  }

  public updatePhoto(photo: Photo): Promise<any[]> {
    return this.getPhotos().then(photos => {
      // Do not change the existing `photos` array.
      // `photos` will be a new array after updatng a photo.
      let newVersion = photo;
      this.photos = photos.map((photo: Photo) => {
        if (photo.id === newVersion.id) {
          return newVersion;
        }
        return photo;
      });
      return this.photos;
    });
  }

  public deletePhoto(id: String): Promise<any[]> {
    return this.getPhotos().then(photos => {
      // Do not change the existing `photos` array.
      // `photos` will be a new array after removing a photo.
      this.photos = photos.filter((photo: Photo) => photo.id != id);
      return this.photos;
    });
  }

  private photos: Photo[] = [];
}
