
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  standalone: true,
  imports: [TranslatePipe],
  selector: 'app-procedures',
  styleUrl: './procedures.css',
  templateUrl: './procedures.html',
})
export class Procedures {
  private translate = inject(TranslateService);
}
