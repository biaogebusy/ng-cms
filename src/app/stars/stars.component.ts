import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit, OnChanges {
  /**
   * 推荐指数的数据应该从父组件的循环接收数据，决定显示几颗星星
   * 要想从外部接收数据需要添加@Input(),说明数据是从外部输入进来的
   */

  /**
   * @Input 注解后面紧跟的变量就是外部输入进来的，
   * 外部模板中也要绑定这个输入[rating]="article.star"
   */
  @Input()
  rating = 0;

  @Output()
  ratingChange = new EventEmitter<number> ();

  @Input()
  readonly readonly: boolean = true;

  stars: boolean[];
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    // 先初始化数组，不然会报错没有 push 方法
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      /**
       * 根据 rating 传进来的值判断返回 true 或 false并填入数组
       * 再根据数组的值显示推荐指数
       */
      this.stars.push(i > this.rating);
    }
  }



  clickStar(index) {
    if (!this.readonly) {
      this.rating = index + 1;
    }
    this.ratingChange.emit(this.rating);
  }

}
