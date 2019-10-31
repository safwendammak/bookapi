import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialogbody',
  templateUrl: './dialogbody.component.html',
  styleUrls: ['./dialogbody.component.css']
})
export class DialogbodyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogbodyComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
