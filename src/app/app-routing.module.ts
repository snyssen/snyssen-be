import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { ClockModule } from './components/clock/clock.module';
import { WeatherModule } from './components/weather/weather.module';
import { HomeComponent } from './home/home.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'start-page',
    component: StartPageComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    StartPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    ClockModule,
    WeatherModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
