import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/unsplash.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: [];
  constructor(private photoService: PhotosService) { }

  ngOnInit() {
    this.photoService.currentUser();
    // console.log(this.photos)
  }

  getPhotos(): void {
    this.photos = this.photoService.getPhotos();
  }

}
