export class Article {
    id: number; // 期数
    title: string; // 文章标题
    author: string; // 文章作者
    url: string; // 原文地址
    desc: string; // 文章描述
    star: number; // 推荐指数
    categories: Array<string>; // 文章分类
}
