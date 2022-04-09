import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AnnouncementDetailsPageComponent } from '@components/announcement-details-page/announcement-details-page.component';
import { AnnouncementModule } from '@modules/announcement.module';

@NgModule({
  declarations: [AnnouncementDetailsPageComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    AnnouncementModule,
    AppRoutingModule
  ],
  exports: [AnnouncementDetailsPageComponent]
})
export class AnnouncementDetailsPageModule { }