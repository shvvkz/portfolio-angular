import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const options = {
      strings: ["développeur Full-Stack", "développeur Software Python et Rust", "étudiant en alternance"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    };

    new Typed('.typed', options);
  }

}
