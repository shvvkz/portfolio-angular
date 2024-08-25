import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.css']
})
export class HeaderSectionComponent implements OnInit {

  navbarlinks: HTMLElement[] = [];
  selectHeader: HTMLElement | null = null;
  isDetailPage: boolean = false;

  constructor(private renderer: Renderer2, private router: Router) {
    this.isDetailPage = this.router.url.startsWith('/project-details')
  }

  ngOnInit(): void {
    this.navbarlinks = this.select('#navbar .scrollto', true) as HTMLElement[];
    this.selectHeader = this.select('#header');

    this.navbarlinksActive();
    this.headerScrolled();

    this.renderer.listen(window, 'load', () => {
      this.navbarlinksActive();
      this.headerScrolled();

      if (window.location.hash) {
        if (this.select(window.location.hash)) {
          this.scrollto(window.location.hash);
        }
      }
    });

    this.onscroll(document, () => this.navbarlinksActive());
    this.onscroll(document, () => this.headerScrolled());

    this.on('click', '.mobile-nav-toggle', (e) => {
      this.toggleMobileNav();
    });

    this.on('click', '.navbar .dropdown > a', (e) => {
      if (this.select('#navbar')?.classList.contains('navbar-mobile')) {
        e.preventDefault();
        (e.target as HTMLElement).nextElementSibling?.classList.toggle('dropdown-active');
      }
    }, true);

    this.on('click', '.scrollto', (e) => {
      const target = e.target as HTMLAnchorElement;
      if (this.select(target.hash)) {
        e.preventDefault();
        this.scrollto(target.hash);
      }
    }, true);
  }

  /**
   * Easy selector helper function
   */
  select(el: string, all: boolean = false): any {
    el = el.trim();
    if (all) {
      return Array.from(document.querySelectorAll(el));
    } else {
      return document.querySelector(el);
    }
  }

  /**
   * Easy event listener function
   */
  on(type: string, el: string, listener: (event: any) => boolean | void, all: boolean = false): void {
    const selectEl = this.select(el, all);
    if (selectEl) {
      if (all && Array.isArray(selectEl)) {
        selectEl.forEach(e => this.renderer.listen(e, type, listener));
      } else {
        this.renderer.listen(selectEl, type, listener);
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  onscroll(el: Element | Document, listener: (event: any) => boolean | void): void {
    this.renderer.listen(el, 'scroll', listener);
  }

  /**
   * Navbar links active state on scroll
   */
  navbarlinksActive(): void {
    let position = window.scrollY + 200;
    this.navbarlinks.forEach(navbarlink => {
      if (!(navbarlink instanceof HTMLAnchorElement)) return;
      if (!navbarlink.hash) return;
      let section = this.select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  }

  /**
   * Scrolls to an element with header offset
   */
  scrollto(el: string): void {
    let header = this.select('#header');
    let offset = header ? header.offsetHeight : 0;

    if (header && !header.classList.contains('header-scrolled')) {
      offset -= 16;
    }

    let elementPos = this.select(el)?.offsetTop || 0;
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    });
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  headerScrolled(): void {
    if (this.selectHeader) {
      if (window.scrollY > 100) {
        this.selectHeader.classList.add('header-scrolled');
      } else {
        this.selectHeader.classList.remove('header-scrolled');
      }
    }
  }

  /**
   * Mobile nav toggle
   */
  toggleMobileNav(): void {
    let navbar = this.select('#navbar');
    if (navbar) {
      navbar.classList.toggle('navbar-mobile');
    }
    let toggleIcon = this.select('.mobile-nav-toggle');
    if (toggleIcon) {
      toggleIcon.classList.toggle('bi-list');
      toggleIcon.classList.toggle('bi-x');
    }
  }
}
