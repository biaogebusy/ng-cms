import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  }

  getArticle(uuid) {
    this.articleService.getArticle(uuid).subscribe(json => {
      this.article = json.data;
      console.log(this.article);
      const field = json.data.attributes;

      // fb
      console.log(field);
      this.articleForm = this.fb.group({
        itle: [field.title, Validators.required],
        author: [field.field_author, Validators.required],
        link: [field.field_url.uri, Validators.required],
        desc: [field.body.summary, Validators.required],
        categories: ['', Validators.required]
      });
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
