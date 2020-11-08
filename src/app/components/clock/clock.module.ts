import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock.component';
import { AppModule } from 'src/app/app.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ClockComponent
  ]
})
export class ClockModule { }
