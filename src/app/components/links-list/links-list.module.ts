import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksListComponent } from './links-list.component';
import { NbCardModule, NbListModule } from '@nebular/theme';



@NgModule({
  declarations: [LinksListComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule
  ],
  exports: [LinksListComponent]
})
export class LinksListModule { }
