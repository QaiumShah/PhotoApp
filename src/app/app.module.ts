import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule } from 'ionic-angular';
import { PhotoLibraryService } from './photo-library.service';
import { PhotoAppRootComponent } from './photo-app-root/photo-app-root.component';
import { PhotosListPageComponent } from './photos-list-page/photos-list-page.component';
import { PhotoDetailsPageComponent } from './photo-details-page/photo-details-page.component';
import { PhotoListItemComponent } from './photo-list-item/photo-list-item.component';
import { PhotoDetailsEditorComponent } from './photo-details-editor-page/photo-details-editor-page.component';
import { PhotoSlidePage } from './photo-slide/photo-slide.component';

@NgModule({
  declarations: [
    PhotoAppRootComponent,
    PhotosListPageComponent,
    PhotoDetailsPageComponent,
    PhotoListItemComponent,
    PhotoDetailsEditorComponent,
    PhotoSlidePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(PhotoAppRootComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    PhotoAppRootComponent,
    PhotosListPageComponent,
    PhotoDetailsPageComponent,
    PhotoDetailsEditorComponent,
    PhotoListItemComponent,
    PhotoSlidePage
  ],
  providers: [PhotoLibraryService]
})
export class AppModule {}
