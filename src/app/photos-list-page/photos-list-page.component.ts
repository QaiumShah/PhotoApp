import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Photo } from '../entities/photo';
import { PhotoLibraryService } from '../photo-library.service';
import { PhotoDetailsPageComponent } from '../photo-details-page/photo-details-page.component';


@Component({
  selector: 'photos-list-page',
  templateUrl: 'photos-list-page.component.html'
})
export class PhotosListPageComponent {
  private photos: Photo[] = [];
  filter: string = "";
  filteredPhotos: Photo[] = this.photos;

  constructor(private navCtrl: NavController,
              private backend: PhotoLibraryService)
  {
  }

  // Ionic call this method when the page is about to enter and become the active page.
  // The list of photos should be refreshed form the backend every time
  // when the page becomes visible (to avoid showing outdated information).
  ionViewWillEnter() {
    this.backend.getPhotos().then(photos => {
      this.photos = photos;
      this.updateFilter();
    });
  }

  openPhotoDetailsPage(photo: Photo) {
    this.navCtrl.push(PhotoDetailsPageComponent, { photo: photo });
  }

  addPhoto($event: any) {
    if ($event.target.files.length == 0) {
      return;
    }

    let file = $event.target.files[0];
    let url = '../assets/icon/favicon.ico';
    let id = `${this.photos.length + 1}`;
    let photo = <Photo> {
      id: id,
      title: file.fileName,
      description: `A user has added this photo. \nFile name: ${file.name}, size: ${file.size} byte(s).`,
      url: url,
      created: new Date(),
      starred: false
    };

    this.backend.addPhoto(photo).then(photos => {
      this.photos = photos;
      this.updateFilter();
    });

    this.backend.getPhotos().then(photos => {
      this.photos = photos;
      this.updateFilter();
    });
  }

  updateFilter($event?: any) {
    if ($event) {
      this.filter = $event.target.value;
    }

    if (this.filter) {
      let re = new RegExp(`${this.filter}`, 'gi');
      this.filteredPhotos = this.photos.filter(photo => {
        let test1 = re.test(photo.title);
        let test2 = re.test(photo.description);
        return test1 || test2;
      });
    } else {
      this.filteredPhotos = this.photos;
    }
  }
}
