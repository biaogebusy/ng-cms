import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  correntMent: number;
  menus: Array<Menu>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menus = [
      new Menu(1, '首页', 'dashboard'),
      new Menu(2, '文章管理', 'manage')
    ];
  }

  nav(menu: Menu) {
    this.router.navigateByUrl(menu.url);
    this.correntMent = menu.id;
  }

}

// 菜单
class Menu {
  constructor(
    public id: number,
    public title: string,
    public url: string
  ) {

  }
}
