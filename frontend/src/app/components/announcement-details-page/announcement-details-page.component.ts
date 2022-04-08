import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementService } from '@services/announcement.service';
import { Announcement } from '@shared/models/announcement.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-announcement-details-page',
  templateUrl: './announcement-details-page.component.html',
  styleUrls: ['./announcement-details-page.component.scss']
})
export class AnnouncementDetailsPageComponent implements OnInit {

  id!: string;
  announcement!: Announcement;
  similarAnnouncements: Announcement[] | undefined;
  date!: any;

  constructor(private route: ActivatedRoute, public announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params) =>
        this.announcementService.getAnnouncement(params.get('id')!))
    ).subscribe(data => {
      this.announcement = data.announcement;
      this.similarAnnouncements = this.announcementService.getSimilar(data.announcement);
      this.date = new Date(data.announcement.createdDate);
    });
  }
}
