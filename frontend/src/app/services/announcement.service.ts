import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getAnnouncement(id: string) {
    return this.http.get(this.url + id).pipe(map((response: any) => response));
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

  getSimilar(announcement: Announcement) {
    const resultObj: any = {};
    const selectedTitleUnique = this.getUnique(announcement.title);
    const selectedDescriptionUnique = this.getUnique(announcement.description);
    const announcements = this.deleteSelectedAnnouncement(announcement);
    announcements.map(item => {
      const itemTitleUnique = this.getUnique(item.title);
      const itemDescriptionUnique = this.getUnique(item.description);
      const intersectionTitle = this.getIntersection(selectedTitleUnique, itemTitleUnique);
      const intersectionDescription = this.getIntersection(selectedDescriptionUnique, itemDescriptionUnique);
      if (intersectionTitle.length && intersectionDescription.length) {
        const intersectionsCount = intersectionTitle.length + intersectionDescription.length;
        resultObj[JSON.stringify(item)] = intersectionsCount;
      }
    })
    const sortedObj = this.sortObj(resultObj);
    const result = Object.values(sortedObj).slice(0, 3).map(el => JSON.parse(el));
    return result.length ? result : undefined;
  }

  getUnique(str: string) {
    const arr = str.replace(/[^a-zа-я ]/ig, '').toLowerCase().split(' ');
    return new Set(arr);
  }

  getIntersection(selectedUnique: any, itemUnique: any) {
   return [...itemUnique].filter(word => selectedUnique.has(word));
  }

  deleteSelectedAnnouncement(announcement: Announcement) {
    return this.announcements.filter(el => announcement._id !== el._id);
  }

  sortObj(unsortedObj: any) {
    return Object.keys(unsortedObj).sort((a, b) => unsortedObj[b] - unsortedObj[a]);
  }
}
