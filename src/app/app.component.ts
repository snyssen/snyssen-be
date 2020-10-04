import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'snyssen-be';
  sidebarState: 'expanded' | 'collapsed' | 'compacted' = 'collapsed';

  toggleSidebar(): void {
    if (this.sidebarState === 'collapsed') {
      this.sidebarState = 'expanded';
    } else {
      this.sidebarState = 'collapsed';
    }
  }
}
