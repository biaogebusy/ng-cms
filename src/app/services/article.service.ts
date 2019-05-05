import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  articles = {};
  // web api
  private articleUrl = "https://jsonapi.dd:8443/jsonapi/node/article";

  constructor(private http: HttpClient) {}

  getArticles(): Observable<any> {
    return this.http.get(this.articleUrl);
  }
}
