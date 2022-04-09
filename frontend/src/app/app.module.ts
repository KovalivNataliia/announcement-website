import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from '@modules/header.module';
import { DialogModule } from '@modules/dialog.module';
import { AnnouncementsPageModule } from '@modules/announcements-page.module';
import { AnnouncementDetailsPageModule } from '@modules/announcement-details-page.module';
import { AnnouncementModule } from '@modules/announcement.module';
import { SearchFormModule } from '@modules/search-form.module';

import { AnnouncementService } from '@services/announcement.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    DialogModule,
    AnnouncementsPageModule,
    AnnouncementDetailsPageModule,
    AnnouncementModule,
    SearchFormModule
  ],
  providers: [
    AnnouncementService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
