import { Component, HostListener } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';
@Component({
  imports: [Navbar, RouterOutlet, Footer],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {
  showBackToTop = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollVisibility();
  }

  onContentScroll(): void {
    this.updateScrollVisibility();
  }

  private updateScrollVisibility(): void {
    const content = document.querySelector('.main-content');

    const scrollPosition = Math.max(
      window.scrollY,
      document.documentElement.scrollTop,
      content?.scrollTop ?? 0,
    );

    this.showBackToTop = scrollPosition > 300;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    document.querySelector('.main-content')?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
