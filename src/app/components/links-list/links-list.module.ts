import { NgModule } from '@angular/core';
import { LinksListComponent } from './links-list.component';
import { NbCardModule, NbMenuModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LinksListComponent],
  imports: [
    SharedModule,
    NbCardModule,
    NbMenuModule
  ],
  exports: [LinksListComponent]
})
export class LinksListModule { }
