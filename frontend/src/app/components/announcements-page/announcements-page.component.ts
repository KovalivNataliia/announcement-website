import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '@services/announcement.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-announcements-page',
  templateUrl: './announcements-page.component.html',
  styleUrls: ['./announcements-page.component.scss']
})
export class AnnouncementsPageComponent implements OnInit {

  constructor(public announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.announcementService.getAnnouncements().subscribe(data => {
      this.announcementService.announcements = data.announcements;
      this.announcementService.announcements$ = new BehaviorSubject<any[]>(this.announcementService.announcements);
    });
  }
}
