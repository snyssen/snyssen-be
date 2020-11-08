import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockModule } from './components/clock/clock.module';
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
    ClockModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
