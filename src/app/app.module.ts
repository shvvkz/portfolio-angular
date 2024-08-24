import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { AboutSectionComponent } from './about-section/about-section.component'; // Import du module de routage

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    HomePageComponent,
    HeaderSectionComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Le module de routage est ici importé, mais ne déclare aucun composant
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
