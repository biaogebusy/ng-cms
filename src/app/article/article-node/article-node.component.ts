import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/inerfaces/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-node',
  templateUrl: './article-node.component.html',
  styleUrls: ['./article-node.component.css']
})
export class ArticleNodeComponent implements OnInit {
  article: Article;
  constructor(
    private articleService: ArticleService,
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
    });
  }
}
