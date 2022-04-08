import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DialogModule } from '@modules/dialog.module';
import { AnnouncementsPageComponent } from '@components/announcements-page/announcements-page.component';
import { AnnouncementDetailsPageComponent } from '@components/announcement-details-page/announcement-details-page.component'; 
import { AnnouncementComponent } from '@components/announcement/announcement.component';

@NgModule({
  declarations: [
    AnnouncementsPageComponent,
    AnnouncementComponent,
    AnnouncementDetailsPageComponent 
  ],
  imports: [
    CommonModule,
    DialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [AnnouncementComponent]
})
export class AnnouncementsModule { }