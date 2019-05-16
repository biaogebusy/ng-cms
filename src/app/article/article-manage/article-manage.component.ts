import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import * as _ from 'lodash';
@Component({
  selector: 'app-article-manage',
  templateUrl: './article-manage.component.html',
  styleUrls: ['./article-manage.component.scss']
})
export class ArticleManageComponent implements OnInit {
  public loading = true;
  nameFilter: FormControl = new FormControl();
  keyword: string;

  constructor(private router: Router, private articleService: ArticleService) {}

  articles: any[];

  // 页面初始化的时候调用的钩子
  ngOnInit() {
    this.getArticles();
    this.nameFilter.valueChanges
      .pipe(debounceTime(500))
      .subscribe(value => (this.keyword = value));
  }

  getArticles(): void {
    this.articleService.getArticles(20).subscribe(json => {
      this.articles = this.soryByTerm(json.data);
      console.log(this.articles);
      this.loading = false;
    });
  }

  create() {
    // this.router.navigateByUrl('/manage/1');
  }

  update(id) {
    this.articleService.update(id);
  }

  preview(id) {
    this.articleService.preview(id);
  }

  soryByTerm(articles) {
    return _.sortBy(articles, function(article) {
      return -_.toNumber(article.attributes.field_term);
    });
  }
}
