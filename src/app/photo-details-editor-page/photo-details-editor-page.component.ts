import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Photo } from '../entities/photo';
import { PhotoLibraryService } from '../photo-library.service';

@Component({
  selector: 'photo-details-editor-page',
  templateUrl: 'photo-details-editor-page.component.html'
})
export class PhotoDetailsEditorComponent {
  original: Photo;
  photo: Photo;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private backend: PhotoLibraryService)
  {
  }

  ionViewDidLoad() {
    this.original = this.photo = this.navParams.get('photo');
  }

  back() {
     this.navCtrl.pop();
  }
}
