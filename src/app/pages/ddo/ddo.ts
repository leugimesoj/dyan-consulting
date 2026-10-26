import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  standalone: true,
  imports: [TranslatePipe],
  selector: 'app-ddo',
  styleUrl: './ddo.css',
  templateUrl: './ddo.html',
})
export class Ddo {
  private translate = inject(TranslateService);
  irAlProgramas(event: Event): void {
    event.preventDefault();

    document.getElementById('programas')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
