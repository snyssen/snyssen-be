import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbCardModule } from '@nebular/theme';
import { ClockModule } from './components/clock/clock.module';
import { LinksListModule } from './components/links-list/links-list.module';
import { SearchBarModule } from './components/search-bar/search-bar.module';
import { WeatherModule } from './components/weather/weather.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
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
    RouterModule.forRoot(routes, { useHash: true }),
    SharedModule,
    ClockModule,
    WeatherModule,
    SearchBarModule,
    LinksListModule,
    NbCardModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
