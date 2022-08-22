import { Component } from '@angular/core';
import { CustomIconsService } from './core/services/custom-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'beyonic';

  constructor(private customIconService: CustomIconsService) {
    this.customIconService.init();
  }
}
