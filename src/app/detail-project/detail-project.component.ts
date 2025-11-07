import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swiper from 'swiper';

interface Project {
  id: string;
  name: string;
  category: string;
  categoryName: string;
  client: string;
  date: string;
  link: string;
  images: string[];
  languages: string[];
  languagesNames: string[];
  finished: boolean;
  description: string;
}

@Component({
  selector: 'app-detail-project',
  templateUrl: './detail-project.component.html',
  styleUrls: ['./detail-project.component.css']
})
export class DetailProjectComponent implements OnInit {

  project: Project | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.loadProjectDetails(projectId);
  }

  loadProjectDetails(id: string | null): void {
    if (id) {
      this.http.get<{ projects: Project[] }>('assets/projects-info.json').subscribe(data => {
        this.project = data.projects.find(p => p.id === id);

        if (this.project && this.project.images.length > 1) {
          setTimeout(() => {
            this.initializeSwiper();
          }, 0);
        }
      });
    }
  }

  initializeSwiper(): void {
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      on: {
        slideChange: () => {
          this.updateActiveBulletColor();
          this.updateNonActiveBulletColor();
        }
      }
    });

    this.changeBulletStyle();
    this.updateActiveBulletColor();
    this.updateNonActiveBulletColor();
  }

  changeBulletStyle(): void {
    const bullets = document.querySelectorAll('.portfolio-details-slider .swiper-pagination .swiper-pagination-bullet');
    bullets.forEach((bullet) => {
      (bullet as HTMLElement).style.width = '12px';
      (bullet as HTMLElement).style.height = '12px';
      (bullet as HTMLElement).style.opacity = '1';
    });
  }

  updateNonActiveBulletColor(): void {
    const nonActiveBullets = document.querySelectorAll('.portfolio-details-slider .swiper-pagination .swiper-pagination-bullet:not(.swiper-pagination-bullet-active)');
    nonActiveBullets.forEach((bullet) => {
      (bullet as HTMLElement).style.backgroundColor = '#111111';
      (bullet as HTMLElement).style.border = '1px solid #af70af';
    });
  }

  updateActiveBulletColor(): void {
    const activeBullet = document.querySelector('.portfolio-details-slider .swiper-pagination .swiper-pagination-bullet-active');
    if (activeBullet) {
      (activeBullet as HTMLElement).style.backgroundColor = '#69069e';
      (activeBullet as HTMLElement).style.border = '1px solid #af70af';
    }
  }
}
