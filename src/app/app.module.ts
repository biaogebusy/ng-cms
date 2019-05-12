import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ContentComponent } from './content/content.component';
import { ArticleManageComponent } from './article/article-manage/article-manage.component';
import { StarsComponent } from './stars/stars.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleFormComponent } from './article/article-form/article-form.component';
import { ArticleFilterPipe } from './pipe/article-filter.pipe';
import { PhotosModule } from './photos/photos.module';
import { DialogComponent } from './dialog/dialog.component';
/**
 * 配置路由信息
 * 并用RouterModule.forRoot 方法来配置路由器，并把它的返回值添加到AppModule的imports数组中
 */
const appRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'manage', component: ArticleManageComponent},
  {path: 'manage/:id', component: ArticleFormComponent}
];

// NgModule 装饰器
@NgModule({
  // declarations 只能用来声明组件、指令、管道
  declarations: [
    AppComponent,
    ContentComponent,
    ArticleManageComponent,
    StarsComponent,
    DashboardComponent,
    ArticleFormComponent,
    ArticleFilterPipe,
    DialogComponent
  ],
  // 声明正常运转还需要什么东西，也就是AppModule模块依赖的模块
  imports: [
    PhotosModule,
    CoreModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  // 模块中提供了什么服务，只能声明服务
  providers: [],
  // 声明主组件
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
