import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DialogModule } from '@modules/dialog.module';
import { AnnouncementsPageComponent } from '@components/announcements-page/announcements-page.component';
import { AnnouncementDetailsPageComponent } from '@components/announcement-details-page/announcement-details-page.component';
import { AnnouncementComponent } from '@components/announcement/announcement.component';
import { SearchFormComponent } from '@components/search-form/search-form.component';

@NgModule({
  declarations: [
    AnnouncementsPageComponent,
    AnnouncementComponent,
    AnnouncementDetailsPageComponent,
    SearchFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    AppRoutingModule,
    MatFormFieldModule
  ],
  exports: [AnnouncementComponent]
})
export class AnnouncementsModule { }