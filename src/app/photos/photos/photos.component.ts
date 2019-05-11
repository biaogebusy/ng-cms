import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any;
  constructor(private unsplashService: UnsplashService) {}

  ngOnInit() {
    this.getPhotos();
    // console.log(this.photos)
  }

  getPhotos(): void {
    this.unsplashService.getGallery('code')
    .subscribe(json =>{
      console.log(json);
    })
  }
}
