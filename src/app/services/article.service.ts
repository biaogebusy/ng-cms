import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/json'
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

  constructor(private http: HttpClient) {}

  getArticles(): any {
    return this.http.get(this.api.dev, httpOptions);
  }

  getArticle(uuid): any {
    return this.http.get(this.api.dev + '/' + uuid, httpOptions);
  }
}
