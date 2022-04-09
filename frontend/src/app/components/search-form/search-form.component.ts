import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private announcementService: AnnouncementService, private router: Router) { }

  searchByTitle(text: string) {
    this.searchMode = true;
    this.noResults = false;
    this.text = '';
    this.announcementService.getAnnouncements(text).subscribe(data => {
      if (!data.announcements.length) this.noResults = true;
      this.announcementService.announcements$.next(data.announcements);
    });
  }

  refreshComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate([currentUrl]);
  }
}
