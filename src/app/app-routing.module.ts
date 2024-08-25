import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailProjectsPageComponent } from './detail-projects-page/detail-projects-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'project-details/:id', component: DetailProjectsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
