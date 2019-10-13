import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import {TeamModule} from '../team/team.module';
import {ButtonModule} from '../../modules-external/button/button.module';



@NgModule({
  declarations: [HeaderComponent, LayoutComponent],
  imports: [
    CommonModule,
    TeamModule,
    ButtonModule,
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
