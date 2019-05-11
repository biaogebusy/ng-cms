import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
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
