import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snyssen-be';
  sidebarState: 'expanded' | 'collapsed' | 'compacted' = 'compacted';
  navMenuItems: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home',
      link: '/',
      pathMatch: 'full'
    },
    {
      title: 'Start',
      icon: 'grid-outline',
      link: 'start-page',
      pathMatch: 'full'
    },
  ];
  pageMenuItems: NbMenuItem[] = [];

  toggleSidebar(): void {
    if (this.sidebarState === 'compacted') {
      this.sidebarState = 'expanded';
    } else {
      this.sidebarState = 'compacted';
    }
  }
}
