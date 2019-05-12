import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/inerfaces/article';
import { ArticleService } from 'src/app/services/article.service';
import { UnsplashService } from 'src/app/services/unsplash.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-node',
  templateUrl: './article-node.component.html',
  styleUrls: ['./article-node.component.css']
})
export class ArticleNodeComponent implements OnInit {
  article: Article;
  imageUrl: string;

  constructor(
    private articleService: ArticleService,
    private unsplashService: UnsplashService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const uuid = this.route.snapshot.paramMap.get('id');
    this.getArticle(uuid);
  }

  getArticle(uuid) {
    this.articleService.getArticle(uuid).subscribe(json => {
      console.log(json);
      this.article = json.data;
      const keyword = json.data.attributes.title;
      this.searchPhoto(keyword);
    });
  }

  searchPhoto(keyword) {
    this.unsplashService.searchPhoto(keyword, 1, 1).subscribe(json => {
      console.log(json);
      this.imageUrl = json.results[0].urls.regular;
    });
  }
}
