import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Token } from './guard/token';
import { TokenDialogComponent } from './shared/token-dialog/token-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private token: Token,
    public dialog: MatDialog) {
    if (!this.token.getToken()) {
      this.openDialog();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TokenDialogComponent, {
      width: '250px',
      hasBackdrop: true,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((value: string) => {
      if (value) {
        this.token.setToken(value);
      }
    });
  }
}
