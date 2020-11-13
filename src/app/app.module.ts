import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSidebarService,
  NbIconModule,
  NbButtonModule,
  NbMenuModule,
  NbMenuService,
  NbThemeService, NbActionsModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbIconModule,
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbActionsModule,
    SharedModule
  ],
  providers: [
    NbSidebarService,
    NbMenuService,
    NbThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
