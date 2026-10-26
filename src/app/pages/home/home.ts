import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
@Component({
  standalone: true,
  imports: [TranslatePipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private translate = inject(TranslateService);
  readonly services = [
    {
      key: 'RECRUITMENT',
      href: '/recruitment',
      icon: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.6-7 8-7s8 3 8 7',
    },
    {
      key: 'PAYROLL',
      href: '/payroll',
      icon: 'M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5',
    },
    {
      key: 'PROCEDURES',
      href: '/procedures',
      icon: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6zM9 12l2 2 4-4',
    },
    {
      key: 'TRAINING',
      href: '/training',
      icon: 'M3 8l9-4 9 4-9 4zM7 10.5V15c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5',
    },
    { key: 'DDO', href: '/ddo', icon: 'M3 20h18M5 20v-6M12 20V6M19 20V10' },
  ];
  constructor() {}
}
