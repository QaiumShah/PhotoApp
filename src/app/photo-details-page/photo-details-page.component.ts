import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Photo } from '../entities/photo';
import { PhotoLibraryService } from '../photo-library.service';
import { PhotoDetailsEditorComponent } from '../photo-details-editor-page/photo-details-editor-page.component';
import { PhotoSlidePage } from '../photo-slide/photo-slide.component';

@Component({
  selector: 'photo-details-page',
  templateUrl: 'photo-details-page.component.html'
})
export class PhotoDetailsPageComponent {
  photo: Photo = null;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private backend: PhotoLibraryService) {
  }

  openPhotoSlider(photo: Photo){
    this.navCtrl.push(PhotoSlidePage, { photo: photo });
  }

  ionViewDidLoad() {
    this.photo = this.navParams.get('photo');
  }

  back() {
     this.navCtrl.pop();
  }

  deletePhoto() {
     this.backend.deletePhoto(this.photo.id).then(
       () => this.back()
     );
   }

   toggleStar() {
     this.photo.starred = !this.photo.starred;
     this.backend.updatePhoto(this.photo);
   }

   editPhoto() {
     this.navCtrl.push(PhotoDetailsEditorComponent, { photo: this.photo });
   }
 }
