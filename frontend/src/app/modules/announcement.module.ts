import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DialogModule } from '@modules/dialog.module';
import { AnnouncementComponent } from '@components/announcement/announcement.component';

@NgModule({
  declarations: [AnnouncementComponent],
  imports: [
    CommonModule,
    MatCardModule,
    AppRoutingModule,
    DialogModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [AnnouncementComponent]
})
export class AnnouncementModule { }