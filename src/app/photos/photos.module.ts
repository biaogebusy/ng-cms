import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PhotosModule { }
