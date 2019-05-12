import { Component, OnInit, Input, Inject } from '@angular/core';
import { DialogData } from '../inerfaces/dialogData';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {
   }

  ngOnInit() {
    console.log(this.data)
  }

}
