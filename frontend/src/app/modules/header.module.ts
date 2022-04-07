import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from '@components/header/header.component';
import { DialogModule } from '@modules/dialog.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    DialogModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }