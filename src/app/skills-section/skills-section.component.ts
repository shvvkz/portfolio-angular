import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent {

  toggleDetail(detail: HTMLDivElement, event: Event) {
    const button = event.target as HTMLElement;
    const isDisplayed = detail.style.display === 'block';

    if (isDisplayed) {
      button.innerHTML = 'Afficher plus de détails';
      detail.style.display = 'none';
    } else {
      button.innerHTML = 'Ne plus afficher';
      detail.style.display = 'block';
    }
  }
}
