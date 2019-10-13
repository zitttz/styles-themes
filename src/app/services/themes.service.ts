import {Injectable} from '@angular/core';
import {lightTheme} from '../themes/light';
import {redTheme} from '../themes/red';
import {environment} from '../../environments/environment';
import {Themes} from '../themes/themes';
import {Theme} from '../interfaces/app/theme';
import {greenTheme} from '../themes/green';
import {orangeTheme} from '../themes/orange';
import {darkTheme} from '../themes/dark';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  defaultTheme: Theme = lightTheme;
  theme: Theme = this.defaultTheme;
  themes: Theme[] = [lightTheme, darkTheme, orangeTheme, greenTheme, redTheme];

  static parseKey(key: string): string {
    return `-${key.replace(/[A-Z0-9]/g, letter => `-${letter.toLowerCase()}`)}`;
  }

  constructor() {
    if (environment.theme) {
      const foundTheme = this.themes.find(theme => theme.code === environment.theme);
      this.defaultTheme = foundTheme ? foundTheme : lightTheme;
    }
    this.init();
  }

  init(): void {
    const themeFromLS = localStorage.getItem('theme');
    if (themeFromLS) {
      if (environment.theme) {
        if (themeFromLS === environment.theme || themeFromLS === 'dark') {
          this.apply(themeFromLS);
        } else {
          this.apply(environment.theme);
        }
      } else {
        this.apply(themeFromLS as Themes);
      }
    } else {
      this.apply(this.defaultTheme.code);
    }
  }

  apply(code: Themes): void {
    const foundTheme = this.themes.find(theme => theme.code === code);
    this.theme = foundTheme ? foundTheme : this.defaultTheme;
    Object.keys(this.theme).forEach(key => {
      document.documentElement.style.setProperty(`${ThemesService.parseKey(key)}`, this.theme[key]);
    });
    localStorage.setItem('theme', this.theme.code);
  }

  next(): void {

    let themeIndex = 0;
    this.themes.forEach((theme, i) => {
      if (theme.code === this.theme.code) {
        themeIndex = i;
      }
    });

    themeIndex++;

    if (themeIndex + 1 === this.themes.length) {
      themeIndex = 0;
    }
    this.apply(this.themes[themeIndex].code);
  }
}
