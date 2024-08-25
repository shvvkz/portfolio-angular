import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-service-section',
  templateUrl: './service-section.component.html',
  styleUrls: ['./service-section.component.css']
})
export class ServiceSectionComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.services-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 6000, // 6 seconds delay
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        }
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

  changeBulletStyle():void{
    const bullets = document.querySelectorAll('.services-slider .swiper-pagination .swiper-pagination-bullet');
    bullets.forEach((bullet) => {
      (bullet as HTMLElement).style.width = '12px';
      (bullet as HTMLElement).style.height = '12px';
      (bullet as HTMLElement).style.opacity = '1';
    });
  }
  updateNonActiveBulletColor(): void {
    const nonActiveBullets = document.querySelectorAll('.services-slider .swiper-pagination .swiper-pagination-bullet:not(.swiper-pagination-bullet-active)');
    nonActiveBullets.forEach((bullet) => {
      (bullet as HTMLElement).style.backgroundColor = '#111111';
      (bullet as HTMLElement).style.border = '1px solid #af70af';
    });
  }
  // Method to update the color of the active bullet
  updateActiveBulletColor(): void {
    const activeBullet = document.querySelector('.services-slider .swiper-pagination .swiper-pagination-bullet-active');
    if (activeBullet) {
      (activeBullet as HTMLElement).style.backgroundColor = '#69069e';
      (activeBullet as HTMLElement).style.border = '1px solid #af70af';
    }
  }
}
