import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../services/unsplash.service';
import { IGallery } from '../inerfaces/gallery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  gallery: IGallery = {
    total: 0,
    total_pages: 0,
    results: []
  };

  constructor(private unsplash: UnsplashService) {}

  ngOnInit() {
    this.unsplash.getGallery('code').subscribe((data: IGallery) => {
      console.log(data);
      this.gallery = data;
    });
  }
}
