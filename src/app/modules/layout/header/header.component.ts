import { Component, OnInit } from '@angular/core';
import {Theme} from '../../../interfaces/app/theme';
import {ThemesService} from '../../../services/themes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  theme: Theme;

  constructor(
    private readonly themesService: ThemesService
  ) {
    this.theme = this.themesService.theme;
  }

  ngOnInit() {
  }

  nextTheme(): void {
    this.themesService.next();
    this.theme = this.themesService.theme;
  }
}
