import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { register } from 'swiper/element/bundle';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { ProjectSectionComponent } from './project-section/project-section.component'; // Import du module de routage
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterSectionComponent } from './footer-section/footer-section.component';
import { DetailProjectsPageComponent } from './detail-projects-page/detail-projects-page.component';
import { TechnoSectionComponent } from './techno-section/techno-section.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    HomePageComponent,
    HeaderSectionComponent,
    AboutSectionComponent,
    ServiceSectionComponent,
    ProjectSectionComponent,
    FooterSectionComponent,
    DetailProjectsPageComponent,
    TechnoSectionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule  // Le module de routage est ici importé, mais ne déclare aucun composant
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
