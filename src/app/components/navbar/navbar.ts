import { Component, HostListener } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  activeSection: string = 'about';
  mobileMenuOpen: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll')
  onScroll() {
    const sections = ['about', 'experience', 'projects', 'education', 'skills', 'contact'];
    const scrollPosition = window.pageYOffset + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string): void {
    this.activeSection = sectionId;
    this.viewportScroller.scrollToAnchor(sectionId);
    this.mobileMenuOpen = false;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.activeSection = 'about';
    this.mobileMenuOpen = false;
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}