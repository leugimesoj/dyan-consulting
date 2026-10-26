import { Component, inject, signal } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  imports: [TranslatePipe, RouterModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  private translate = inject(TranslateService);
  menuOpen = signal(false);
  servicesOpen = signal(false);

  toggleServicesDropdown(event: Event): void {
    event.stopPropagation();
    this.servicesOpen.update((open) => !open);
  }

  openServicesDropdown(): void {
    // En pantallas táctiles, el control se hace con el botón.
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      this.servicesOpen.set(true);
    }
  }

  closeServicesDropdown(): void {
    this.servicesOpen.set(false);
  }
  toggleMenu() {
    this.menuOpen.update((v) => !v);
  }
  closeMenu() {
    this.menuOpen.set(false);
  }
  toggleLanguage(): void {
    const current = this.translate.currentLang();

    this.translate.use(current === 'es' ? 'en' : 'es');
  }
}
