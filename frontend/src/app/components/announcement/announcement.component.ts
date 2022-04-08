import { Component, Input, DoCheck } from '@angular/core';
import { Announcement } from '@shared/models/announcement.model';
import { AnnouncementService } from '@services/announcement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements DoCheck {

  @Input() announcement!: Announcement;
  announcementUrl!: boolean;

  constructor(private announcementService: AnnouncementService, private router: Router) { }

  ngDoCheck(): void {
    this.announcementUrl = this.router.url === '/announcements';
  }

  updateAnnouncement(announcementData: any, id: string) {
    if (announcementData) {
      const [title, description] = announcementData;
      const announcement: Announcement = {
        title,
        description
      }
      this.announcementService.updateAnnouncement(announcement, id).subscribe(data => {
        if (data.message === 'Success') {
          this.announcementService.announcements.map(announcement => {
            if (announcement._id === id) {
              announcement.title = title;
              announcement.description = description;
            }
          });
          this.announcementService.announcements$.next(this.announcementService.announcements);
        }
      })
    }
  }

  deleteAnnouncement(id: string) {
    this.announcementService.deleteAnnouncement(id).subscribe(data => {
      if (data.message === 'Success') {
        this.announcementService.announcements.map((announcement, idx, arr) => {
          if (announcement._id === id) {
            arr.splice(idx, 1);
          }
        });
        this.announcementService.announcements$.next(this.announcementService.announcements);
      }
    })
  }
}
