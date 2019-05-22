import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ArticleManageComponent } from './article/article-manage/article-manage.component';
import { ArticleFormComponent } from './article/article-form/article-form.component';
import { ArticleNodeComponent } from './article/article-node/article-node.component';

/**
 * 配置路由信息
 * 并用RouterModule.forRoot 方法来配置路由器，并把它的返回值添加到AppModule的imports数组中
 */
const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage', component: ArticleManageComponent },
  { path: 'manage/:id', component: ArticleFormComponent },
  { path: 'article/:id', component: ArticleNodeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      initialNavigation: 'enabled',
      enableTracing: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
