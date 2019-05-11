import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule
  ]
})
export class CoreModule { }
