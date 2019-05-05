import { Injectable } from '@angular/core';
import Unsplash, { toJson } from 'unsplash-js';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  unsplash = new Unsplash({
    applicationId: '3070feb2fe413ff6b104693e70a3b66575fbe35bf6cc33e40c992860e5a5a77e',
    secret: '4b0d6f33a74d930274d54b1a339a1ab3d3e07f4513924c80900780552d54031c'
  });

  photos: [];

  constructor() {
  }

  getPhotos() {
    // console.log(this.photos)
    this.unsplash.photos
      .listPhotos(2, 15, "latest")
      .then(toJson)
      .then(json => {
        this.photos = json;
        // console.log(this.photos);
      });
    return this.photos;
  }
}
