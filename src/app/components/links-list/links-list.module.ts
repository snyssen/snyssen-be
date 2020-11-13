import { NgModule } from '@angular/core';
import { LinksListComponent } from './links-list.component';
import { NbCardModule, NbIconModule, NbMenuModule } from '@nebular/theme';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [LinksListComponent],
  imports: [
    SharedModule,
    NbCardModule,
    NbMenuModule,
    NbIconModule
  ],
  exports: [LinksListComponent]
})
export class LinksListModule { }
