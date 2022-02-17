import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-token-dialog',
  templateUrl: './token-dialog.component.html',
  styleUrls: ['./token-dialog.component.scss']
})
export class TokenDialogComponent implements OnInit {

  tokenValue: string = "";

  constructor(
    public dialogRef: MatDialogRef<TokenDialogComponent>
  ) { }


  ngOnInit(): void {
  }



}
