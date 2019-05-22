import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    // Make sure you always send the accept header: Accept: application/vnd.api+json.
    Accept: 'application/vnd.api+json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // web api
  private api = {
    dev: 'http://jsonapi.dd:8083/jsonapi/node/article',
    prod: 'http://api.zhaobg.com/jsonapi/node/article'
  };

  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

  getArticles(limit: number): any {
    // ?page[limit]=10
    let filter = '';
    if (limit) {
      filter = `?page[limit]=${limit}`;
    }
    return this.http.get(`${this.api.prod}${filter}`, httpOptions);
  }

  getArticle(uuid): any {
    return this.http.get(this.api.prod + '/' + uuid, httpOptions);
  }

  // update article by uuid
  update(id) {
    this.router.navigateByUrl('/manage/' + id);
  }

  preview(id) {
    this.router.navigateByUrl('/article/' + id);
  }

}
