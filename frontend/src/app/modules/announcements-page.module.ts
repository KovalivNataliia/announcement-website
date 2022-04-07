import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DialogModule } from '@modules/dialog.module';
import { AnnouncementsPageComponent } from '@components/announcements-page/announcements-page.component';
import { AnnouncementComponent } from '@components/announcements-page/announcement/announcement.component';

@NgModule({
  declarations: [
    AnnouncementsPageComponent,
    AnnouncementComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [AnnouncementsPageComponent]
})
export class AnnouncementsPageModule { }