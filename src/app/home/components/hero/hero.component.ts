import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

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
