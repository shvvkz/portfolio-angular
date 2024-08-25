import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-techno-section',
  templateUrl: './techno-section.component.html',
  styleUrls: ['./techno-section.component.css'],
  animations: [
    trigger('detailVisibility', [
      state('visible', style({ opacity: 1, transform: 'scale(1)', display: 'block' })),
      state('hidden', style({ display: 'none' })), // Masquer directement sans animation
      transition('hidden => visible', [
        style({ display: 'block', opacity: 0, transform: 'scale(0.8)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class TechnoSectionComponent implements OnInit {

  selectedTechnoIndex: number = 0;

  ngOnInit(): void {
    this.initializeTechnoButtons();
  }

  initializeTechnoButtons(): void {
    const technoButtons = Array.from(document.querySelectorAll('.container-button-techno > div'));
    
    technoButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        technoButtons.forEach(btn => {
          btn.classList.remove('techno-selected-light', 'techno-selected-dark');
        });

        if (button.classList.contains('button-techno-light')) {
          button.classList.add('techno-selected-light');
        } else {
          button.classList.add('techno-selected-dark');
        }

        this.selectedTechnoIndex = index;
      });
    });
  }

  isTechnoVisible(index: number): boolean {
    return this.selectedTechnoIndex === index;
  }
}
