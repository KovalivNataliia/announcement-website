import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementDetailsPageComponent } from './announcement-details-page.component';

describe('AnnouncementDetailsPageComponent', () => {
  let component: AnnouncementDetailsPageComponent;
  let fixture: ComponentFixture<AnnouncementDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnouncementDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
