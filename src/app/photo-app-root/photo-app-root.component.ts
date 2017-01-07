import { Component } from '@angular/core';
import { PhotosListPageComponent } from '../photos-list-page/photos-list-page.component';

@Component({
  selector: 'photo-app-root',
  templateUrl: 'photo-app-root.component.html'
})
export class PhotoAppRootComponent {
  rootPage = PhotosListPageComponent;
}
