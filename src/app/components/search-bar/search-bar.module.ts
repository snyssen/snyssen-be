import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { NbButtonModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbFormFieldModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule
  ],
  exports: [SearchBarComponent]
})
export class SearchBarModule { }
