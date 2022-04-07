import { Component, OnInit } from '@angular/core';
import { Announcement } from '@shared/models/announcement.model';
import { AnnouncementService } from '@services/announcement.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
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
      })
    }
  }

}
