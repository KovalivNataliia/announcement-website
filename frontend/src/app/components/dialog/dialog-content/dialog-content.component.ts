import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }
}
