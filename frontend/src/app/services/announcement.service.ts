import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Announcement } from '@shared/models/announcement.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  url: string = 'api/announcements/';
  announcements!: Announcement[];
  announcements$: any;
  headers = new HttpHeaders();

  constructor(private http: HttpClient, private router: Router) {
    this.headers.append('Content-Type', 'application/json');
  }

  getAnnouncements$() {
    return this.announcements$;
  }

  getAnnouncement(id: string) {
    return this.http.get(this.url + id).pipe(map((response: any) => response));
  }

  getAnnouncements(text?: string) {
    const params = new HttpParams().set('text', text!);
    return this.http.get(this.url, { params }).pipe(map((response: any) => response));
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
  
  refreshComponent() {
    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate([currentUrl]);
  }
}
