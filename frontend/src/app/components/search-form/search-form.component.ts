import { Component } from '@angular/core';
import { AnnouncementService } from '@services/announcement.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {

  text: string = '';
  noResults: boolean = false;
  searchMode: boolean = false;

  constructor(public announcementService: AnnouncementService) { }

  searchByTitle(text: string) {
    this.searchMode = true;
    this.noResults = false;
    this.text = '';
    this.announcementService.getAnnouncements(text).subscribe(data => {
      if (!data.announcements.length) this.noResults = true;
      this.announcementService.announcements$.next(data.announcements);
    });
  }
}
