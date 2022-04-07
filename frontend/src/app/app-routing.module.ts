import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnouncementsPageComponent } from '@components/announcements-page/announcements-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/announcements', pathMatch: 'full' },
  { path: 'announcements', component: AnnouncementsPageComponent },
  { path: '**', redirectTo: '/announcements' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
