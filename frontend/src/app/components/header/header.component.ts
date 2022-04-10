import { Component, DoCheck } from '@angular/core';
import { Announcement } from '@shared/models/announcement.model';
import { AnnouncementService } from '@services/announcement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {

  announcementUrl!: boolean;

  constructor(private announcementService: AnnouncementService, private router: Router) {}

  ngDoCheck(): void {
    this.announcementUrl = this.router.url === '/announcements';
  }

  addAnnouncement(announcementData: any) {
    if (announcementData) {
      const [title, description] = announcementData;
      const announcement: Announcement = {
        title,
        description
      }
      this.announcementService.addAnnouncement(announcement).subscribe(data => {
        this.announcementService.announcements.push(data.announcement);
        this.announcementService.announcements$.next(this.announcementService.announcements);
        this.announcementService.refreshComponent();
      })
    }
  }
}
