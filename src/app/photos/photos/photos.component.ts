import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: [];
  constructor(private photoService: PhotosService) { }

  ngOnInit() {
    this.getPhotos();
    // console.log(this.photos)
  }

  getPhotos(): void {
    this.photos = this.photoService.getPhotos();
  }

}
