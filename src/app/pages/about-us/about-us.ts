import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  selector: 'app-about-us',
  styleUrl: './about-us.css',
  templateUrl: './about-us.html',
})
export class AboutUs {
  private translate = inject(TranslateService);
  irANuestraHistoria(event: Event): void {
    event.preventDefault();

    document.getElementById('nuestra-historia')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
