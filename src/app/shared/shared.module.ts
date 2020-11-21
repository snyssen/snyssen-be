import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    DirectivesModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    DirectivesModule
  ]
})
export class SharedModule { }
