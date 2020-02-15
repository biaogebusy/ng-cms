import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})

export class ArticleListComponent implements OnInit {

  public loading = true;
  datas: any[];
  articles: any[] = [];
  images: any = {};

  constructor(
    private router: Router,
    private articleService: ArticleService
    ) { }

  fields = '[node--article]=title,changed,body,field_author,field_type,created,field_star,field_url';
  include = 'field_image';

  ngOnInit() {
    const data = this.getData();
  }

  getData(): void {
    this.articleService.getArticles(120, this.fields, this.include).subscribe(json => {
      // console.log(json);
      this.datas = json.data;
      this.getImages(json.included);
      this.setArticles(json.data);
    });
  }

  getImages(items) {
      console.log(this.images)
    _.map(items, (item) => {
        this.images[item.id] = `https://api.zhaobg.com${item.attributes.uri.url}`;
    });
  }

  preview(id) {
    this.articleService.preview(id);
  }

  setArticles(items): void {
    console.log(items);
    _.map(items, (item) => {
      this.articles.push({
        'title': item.attributes.title,
        'sticky': item.attributes.sticky,
        'body': item.attributes.body.summary,
        'author': item.attributes.field_author,
        'created': item.attributes.created,
        'star': item.attributes.field_star,
        'type': item.attributes.field_type,
        'src': this.images[item.relationships.field_image.data.id],
        'id': item.id
      });
    });
    this.loading = false;
    console.log(this.articles)
  }
}
