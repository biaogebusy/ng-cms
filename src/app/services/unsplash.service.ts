import { Injectable } from '@angular/core';
import Unsplash, { toJson } from 'unsplash-js';
import { IGallery } from 'src/app/inerfaces/gallery';
import { Observable, from } from 'rxjs';
import { IPhoto } from '../inerfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private unsplash;

  photos: any;

  constructor() {
    this.unsplash = new Unsplash({
      applicationId:
        '3070feb2fe413ff6b104693e70a3b66575fbe35bf6cc33e40c992860e5a5a77e',
      secret:
        '4b0d6f33a74d930274d54b1a339a1ab3d3e07f4513924c80900780552d54031c',
      callbackUrl: 'urn:ietf:wg:oauth:2.0:oob'
    });
  }

  getGallery(term: string): Observable<IGallery> {
    return from(this.unsplash.search.collections(term, 1).then(toJson));
  }

  getPhotos(term: string, page: number, height: number): Observable<IPhoto> {
    return from(this.unsplash.search.collections(term, page).then(toJson));
  }

  getPhoto(id: string, width: number, height: number): Observable<IPhoto> {
    return from(
      this.unsplash.photos
        .getPhoto(id, width, height, [0, 0, width, height])
        .then(toJson)
    );
  }
}
