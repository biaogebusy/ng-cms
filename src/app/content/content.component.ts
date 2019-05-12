import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  pageTitle = '文章管理系统';
  pageSubTitle = 'Cms';

  navEnd: Observable<NavigationEnd>;

  // 注入路由并实例化
  constructor(private router: Router) {
    this.navEnd = router.events.pipe(
      filter(evt => evt instanceof NavigationEnd)
    ) as Observable<NavigationEnd>;
  }

  ngOnInit() {
    this.navEnd.subscribe(evt => {
      if (evt.url === '/dashboard') {
        this.pageTitle = '首页';
        this.pageSubTitle = 'Home';
      }
      if (evt.url === '/manage') {
        this.pageTitle = '文章管理';
        this.pageSubTitle = 'Article manage';
      }
    });
  }
}
