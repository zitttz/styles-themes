import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamInfoComponent } from './team-info/team-info.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [TeamInfoComponent, TeamComponent],
  imports: [
    CommonModule
  ],
  exports: [TeamComponent]
})
export class TeamModule { }
