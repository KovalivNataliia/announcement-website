import { Component, Input } from '@angular/core';
import { Announcement } from '@shared/models/announcement.model';
import { AnnouncementService } from '@services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {

  @Input() announcement!: Announcement;

  constructor(private announcementService: AnnouncementService) { }

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
