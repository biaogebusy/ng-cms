import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  article: any;
  articleForm: FormGroup;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const uuid = this.route.snapshot.paramMap.get('id');
    this.getArticle(uuid);
    
    console.log(this.article);

    this.articleForm = this.fb.group({
      title: [this.article.attributes.title, Validators.required],
      author: [this.article.attributes.field_author, Validators.required],
      link: [this.article.attributes.field_url.uri, Validators.required],
      desc: [this.article.attributes.body.summary, Validators.required],
      categories: [this.article.attributes.tags, Validators.required]
    });
  }

  getArticle(uuid) {
    this.articleService.getArticle(uuid).subscribe(json => {
      this.article = json.data;
      console.log(this);
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
