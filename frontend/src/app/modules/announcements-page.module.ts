import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnnouncementsPageComponent } from '@components/announcements-page/announcements-page.component';
import { SearchFormModule } from '@modules/search-form.module';
import { AnnouncementModule } from '@modules/announcement.module';

@NgModule({
  declarations: [AnnouncementsPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    AnnouncementModule,
    SearchFormModule
  ],
  exports: [AnnouncementsPageComponent]
})
export class AnnouncementsPageModule { }