import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [MenuComponent, HeaderComponent, SidebarComponent, FooterComponent, SharedModule]
})
export class CoreModule {}
