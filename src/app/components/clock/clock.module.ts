import { NgModule } from '@angular/core';
import { ClockComponent } from './clock.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ClockComponent
  ]
})
export class ClockModule { }
