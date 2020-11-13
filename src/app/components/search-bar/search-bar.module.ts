import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar.component';
import { NbButtonModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    SharedModule,
    FormsModule,
    NbFormFieldModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule
  ],
  exports: [SearchBarComponent]
})
export class SearchBarModule { }
