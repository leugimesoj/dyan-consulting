import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [TranslatePipe],
  selector: 'app-training',
  styleUrl: './training.css',
  templateUrl: './training.html',
})
export class Training {
  private translate = inject(TranslateService);
  irAlCatalogo(event: Event): void {
    event.preventDefault();

    document.getElementById('training-catalog')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  irAlCurso(event: Event, curso: string): void {
    event.preventDefault();

    document.getElementById(curso)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
