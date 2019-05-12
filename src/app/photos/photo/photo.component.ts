import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../../inerfaces/collection';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent implements OnInit {
  @Input() item: Collection;

  avatarStyles: {};
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: this.item.title,
        content: `<img src="${this.item.cover_photo.urls.regular}" />`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed!');
    });
  }

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
