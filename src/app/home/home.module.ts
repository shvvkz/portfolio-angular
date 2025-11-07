import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectComponent } from './components/project/project.component';
import { ResumeComponent } from './components/resume/resume.component';
import { TechnoComponent } from './components/techno/techno.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ProjectComponent,
    ResumeComponent,
    TechnoComponent,
    AboutComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
