import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatIconRegistry } from '@angular/material';
@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [CommonModule, BrowserAnimationsModule, SharedModule],
  exports: [
    MenuComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SharedModule
  ]
})
export class CoreModule {
  /**
   * @SkipSelf 让模块去父级寻找依赖，不然会造成死循环
   * @Optional 可选，如果CoreModule不存在正常执行
   * @param parent
   * @param iconRegistry
   * @param ds
   */
  constructor(
    @Optional() @SkipSelf() parent: CoreModule
    // TODO
    // iconRegistry: MatIconRegistry,
    // ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('Core 模块已经存在，不能再加载！');
    }
    // @ts-ignore
    // TODO
    // loadSvgResources(iconRegistry, ds);
  }
}
