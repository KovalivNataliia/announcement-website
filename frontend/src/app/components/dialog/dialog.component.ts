import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '@components/dialog/dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  @Output() emitConfirm: EventEmitter<any> = new EventEmitter();
  @Input() name!: string;
  @Input() title!: string;
  @Input() description!: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '500px',
      data: { name: this.name, title: this.title, description: this.description }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.emitConfirm.emit(result);
    });
  }
}
