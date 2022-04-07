import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Announcement } from '@shared/models/announcement.model';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  url: string = 'http://localhost:8080/api/announcements/';
  announcements!: Announcement[];
  announcements$: any;
  headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  getAnnouncements$() {
    return this.announcements$;
  }

  getAnnouncements() {
    return this.http.get(this.url).pipe(map((response: any) => response));
  }

  addAnnouncement(announcement: Announcement) {
    return this.http.post(this.url, announcement, { headers: this.headers }).pipe(map((response: any) => response));
  }

  deleteAnnouncement(id: string) {
    return this.http.delete(this.url + id, { headers: this.headers }).pipe(map((response: any) => response));
  }

  updateAnnouncement(announcement: Announcement, id: string) {
    return this.http.put(this.url + id, announcement, { headers: this.headers }).pipe(map((response: any) => response));
  }
}
