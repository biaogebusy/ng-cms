import { Component, OnInit } from '@angular/core';
import { ArticleService, Article } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  article: Article;
  articleForm: FormGroup;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.article = this.articleService.getArticle(parseInt(id, 10));
    console.log(this.article);

    this.articleForm = this.fb.group({
      title: [this.article.title, Validators.required],
      author: [this.article.author, Validators.required],
      link: [this.article.url, Validators.required],
      desc: [this.article.desc, Validators.required],
      categories: [this.article.categories, Validators.required]
    });
  }

  onClick() {
    this.router.navigateByUrl('/manage');
  }

  onSave() {
    this.router.navigateByUrl('/manage');
    console.log(this.articleForm.value);
  }

}
