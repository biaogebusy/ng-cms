import { Component, OnInit, Input } from '@angular/core';
import { DialogData } from '../inerfaces/dialogData';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input() dialogData: DialogData;
  constructor() { }

  ngOnInit() {
  }

}
