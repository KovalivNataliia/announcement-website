import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from '@modules/header.module';
import { DialogModule } from '@modules/dialog.module';
import { AnnouncementsModule } from '@modules/announcements.module';

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
    AnnouncementsModule,
  ],
  providers: [
    AnnouncementService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
