import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
  declarations: [
    PhotosModule,
    PhotoListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PhotosModule { }
