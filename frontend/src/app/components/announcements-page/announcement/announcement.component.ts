import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '@shared/models/announcement.model';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  @Input() announcement!: Announcement;

  constructor() { }

  ngOnInit(): void {
  }

}
