import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService, Article } from '../article.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-article-manage',
  templateUrl: './article-manage.component.html',
  styleUrls: ['./article-manage.component.css']
})
export class ArticleManageComponent implements OnInit {

  articles: Array<Article>;
  nameFilter: FormControl = new FormControl();
  keyword: string;

  constructor(private router: Router, private articleService: ArticleService) {
  }

  // 页面初始化的时候调用的钩子
  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.nameFilter.valueChanges.pipe(
        debounceTime(500)
    ).subscribe(
      value => this.keyword = value
    );
  }

  create () {
    this.router.navigateByUrl('/manage/1');
  }

  update(article) {
    this.router.navigateByUrl('/manage/' + article.id);
  }

}
