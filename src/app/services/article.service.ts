import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  getArticles(): any {
    return this.http.get(this.api.prod, httpOptions);
  }

  getArticle(uuid): any {
    return this.http.get(this.api.prod + '/' + uuid, httpOptions);
  }
}
