import { NgModule } from '@angular/core';
import { WeatherComponent } from './weather.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { NbButtonModule, NbIconModule } from '@nebular/theme';



@NgModule({
  declarations: [WeatherComponent],
  providers: [
    WeatherService
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    NbIconModule,
    NbButtonModule
  ],
  exports: [WeatherComponent]
})
export class WeatherModule { }
