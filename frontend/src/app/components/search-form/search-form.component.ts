import { Component } from '@angular/core';
import { AnnouncementService } from '@services/announcement.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  text!: string;

  constructor(private announcementService: AnnouncementService) { }

  searchByTitle(text: string) {
    this.announcementService.getAnnouncements(text).subscribe(data => {
      this.announcementService.announcements$.next(data.announcements);
    });
  }
}
