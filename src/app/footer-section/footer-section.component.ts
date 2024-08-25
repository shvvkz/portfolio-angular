import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrls: ['./footer-section.component.css']
})
export class FooterSectionComponent {

  constructor(private router: Router) {}

  isProjectDetailsRoute(): boolean {
    return this.router.url.startsWith('/project-details');
  }
}
