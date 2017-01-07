import { Component } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Photo } from '../entities/photo';
import { PhotoLibraryService } from '../photo-library.service';

@Component({
  selector: 'photo-slide',
  templateUrl: 'photo-slide.component.html'
})

export class PhotoSlidePage {
  @ViewChild('mySlider') slider: Slides;
    private photos: Photo[] = [];
    filter: string = "";
    filteredPhotos: Photo[] = this.photos;

  constructor(public navCtrl: NavController,
              private backend: PhotoLibraryService) {

  }
  mySlideOptions = {
    initialSlide: 1,
    loop: true
  };



 }
