import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Project {
  id: string;
  name: string;
  category: string;
  languages: string[];
  languagesNames: string[];
  images: string[];
  finished: boolean;
  isVisible: boolean;
  order: number;
}


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('.portfolio-item', [
          style({ opacity: 0, transform: 'scale(0.8)' }),
          stagger(50, [
            animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true })
      ]),
      transition(':leave', [
        query('.portfolio-item', [
          stagger(50, [
            animate('400ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('itemAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('400ms ease-in', style({ opacity: 0, transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  categories: string[] = [];
  selectedCategory: string = 'Tous';
  originalOrder: Project[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.http.get<any>('assets/projects-info.json').subscribe((data: { projects: Project[] }) => {
      this.projects = data.projects.map((project, index) => ({ 
        ...project, 
        isVisible: true,
        order: index
      }));
      this.originalOrder = [...this.projects];
      this.categories = ['Tous', ...new Set(this.projects.map(project => project.category))];
    });
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;

    if (category === 'Tous') {
      this.resetProjectsOrder();
    } else {
      this.reorderVisibleProjects(category);
    }
  }

  reorderVisibleProjects(category: string): void {
    const visibleProjects = this.projects.filter(project => project.category === category);
    const hiddenProjects = this.projects.filter(project => project.category !== category);

    this.projects.forEach(project => {
      project.isVisible = project.category === category;
    });

    this.projects = [...visibleProjects, ...hiddenProjects];
  }

  resetProjectsOrder(): void {
    this.projects.forEach((project, index) => {
      project.isVisible = true;
      project.order = this.originalOrder[index].order;
    });

    this.projects.sort((a, b) => a.order - b.order);
  }

  goToDetails(project: Project): void {
    this.router.navigate(['/project-details', project.id]);
  }
  
}
