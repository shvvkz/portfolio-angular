import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  constructor(private location: Location) {
    this.location.go(this.location.path());
    // le mettre en 0,0
    window.scrollTo(0, 0);
  }
}
