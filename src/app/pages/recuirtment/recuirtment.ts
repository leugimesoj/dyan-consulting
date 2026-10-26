import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  standalone: true,
  imports: [TranslatePipe],
  selector: 'app-recuirtment',
  styleUrl: './recuirtment.css',
  templateUrl: './recuirtment.html',
})
export class Recuirtment {
  private translate = inject(TranslateService);

  irAlProcesos(event: Event): void {
    event.preventDefault();

    document.getElementById('servicio-incluye')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
