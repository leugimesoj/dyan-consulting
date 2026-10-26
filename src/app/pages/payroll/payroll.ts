import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  standalone: true,
  imports: [TranslatePipe],
  selector: 'app-payroll',
  styleUrl: './payroll.css',
  templateUrl: './payroll.html',
})
export class Payroll {
  private translate = inject(TranslateService);
}
