import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navbarlinks: HTMLElement[] = [];
  selectHeader: HTMLElement | null = null;
  isDetailPage = false;

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private router: Router) {}

  ngOnInit(): void {
    this.navbarlinks = this.select('#navbar .scrollto', true) as HTMLElement[];
    this.selectHeader = this.select('#header');

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isDetailPage = this.router.url.startsWith('/project-details');
      this.updateHeaderState();
    });

    this.isDetailPage = this.router.url.startsWith('/project-details');
    this.updateHeaderState();

    this.renderer.listen(window, 'load', () => {
      this.navbarlinksActive();
      this.headerScrolled();
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

  updateHeaderState(): void {
    if (this.isDetailPage && this.selectHeader) {
      this.selectHeader.classList.add('header-scrolled');
    } else if (this.selectHeader && window.scrollY <= 100) {
      this.selectHeader.classList.remove('header-scrolled');
    }
  }

  select(el: string, all: boolean = false): any {
    el = el.trim();
    return all ? Array.from(document.querySelectorAll(el)) : document.querySelector(el);
  }

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

  onscroll(el: Element | Document, listener: (event: any) => boolean | void): void {
    this.renderer.listen(el, 'scroll', listener);
  }

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

  headerScrolled(): void {
    if (this.selectHeader) {
      if (window.scrollY > 100) {
        this.selectHeader.classList.add('header-scrolled');
      } else if (!this.isDetailPage) {
        this.selectHeader.classList.remove('header-scrolled');
      }
    }
  }

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
