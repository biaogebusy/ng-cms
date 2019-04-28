import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() keyword: string;
  person = new User('Johnson');
  constructor() { }

  ngOnInit() {
    setInterval(() =>
    this.keyword = 'xxx',
    3000);
  }

}

export class User {
  constructor(
    public userName: string
  ){

  }
}
