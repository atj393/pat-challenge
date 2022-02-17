import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenDialogComponent } from './components/token-dialog/token-dialog.component';
import { Token } from './shared/token';

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
