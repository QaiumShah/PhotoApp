import { Component, Input } from '@angular/core';
import { Photo } from '../entities/photo';

@Component({
  selector: 'photo-list-item',
  templateUrl: 'photo-list-item.component.html'
})
export class PhotoListItemComponent {
  /**
  *  The @Input() annotation on a Component property instructs Angular 2
  *  to make this property available for data binding in HTML templates.
  *
  *  For example, <photo-list-item [photo]="some-photo-object">
  */
  @Input()
  photo: Photo;

  toggleStar($event) {
    $event.stopPropagation();
    $event.preventDefault();

    this.photo.starred = !this.photo.starred;
  }
}
