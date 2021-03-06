import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsPageComponent } from '@components/announcements-page/announcements-page.component';
import { AnnouncementDetailsPageComponent } from '@components/announcement-details-page/announcement-details-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/announcements', pathMatch: 'full' },
  { path: 'announcements', component: AnnouncementsPageComponent },
  { path: 'details/:id', component: AnnouncementDetailsPageComponent },
  { path: '**', redirectTo: '/announcements'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
