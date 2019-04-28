
export class Article {
  constructor(
    public id: number,               // 期数
    public title: string,            // 文章标题
    public author: string,           // 文章作者
    public url: string,              // 原文地址
    public desc: string,             // 文章描述
    public star: number,             // 推荐指数
    public categories: Array<string> // 文章分类
  ) {

  }
}

export class ArticleService {
  articles = [
    new Article(1, 'Drupal的安装', 'CaoYu', 'http://zhoabg.com', 'Drupal的安装和初始化', 5, ['Drupal8', '安装']),
    new Article(2, 'View视图的配置', 'JiaMing', 'http://zhoabg.com', 'View视图的安装和使用', 4, ['Drupal8', 'views']),
    new Article(3, '模块的安装和使用', 'Johnson', 'http://zhoabg.com', '模块的安装和使用', 2, ['Drupal8', '模块']),
    new Article(4, 'Drush常用命令', 'TangYu', 'http://zhoabg.com', 'Drush常用的命令都有哪些', 3, ['Drupal8', 'Drush'])
  ];
  constructor() { }

  getArticles () {
    return this.articles;
  }
  getArticle (id: number) {
    return this.articles.find(item => item.id === id);
  }
}

