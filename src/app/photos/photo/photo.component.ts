import { Component, OnInit, Input } from '@angular/core';
import { IPhoto } from 'src/app/inerfaces/photo';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit {
  @Input() item: IPhoto;

  avatarStyles: {};
  constructor() {}

  ngOnInit() {
    this.setAvatarStyles();
  }

  setAvatarStyles() {
    this.avatarStyles = {
      'background-image': `url(${this.item.user.profile_image.medium})`,
      'background-size': 'cover'
    };
  }
}
