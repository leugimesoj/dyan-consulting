import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  standalone: true,
  imports: [TranslatePipe],
  selector: 'app-services',
  styleUrl: './services.css',
  templateUrl: './services.html',
})
export class Services {
  private translate = inject(TranslateService);
}
