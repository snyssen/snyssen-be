import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [WeatherComponent],
  imports: [
    SharedModule
  ],
  exports: [WeatherComponent]
})
export class WeatherModule { }
