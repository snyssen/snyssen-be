import { Component, OnInit } from '@angular/core';
import { NbIconLibraries, NbMenuItem, NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'snyssen-be';
  sidebarState: 'expanded' | 'collapsed' | 'compacted' = 'compacted';
  navMenuPosition: 'top' | 'left' | 'right' | 'bottom' = 'left'
  navMenuItems: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home',
      link: '/'
    },
    {
      title: 'Start',
      icon: 'grid-outline',
      link: 'start-page'
    },
  ];
  pageMenuItems: NbMenuItem[] = [];

  constructor(private themeService: NbThemeService,
              private iconLibraries: NbIconLibraries) {
                // register font-awesome icon packs
    this.iconLibraries.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('far', { packClass: 'far', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('fab', { packClass: 'fab', iconClassPrefix: 'fa' });
  }

  ngOnInit(): void {
    this.themeService.onMediaQueryChange().subscribe(([previous, current]) => {
      // if small screen
      if (['xs', 'is', 'sm', 'md'].includes(current.name)) {
        this.navMenuPosition = 'bottom';
      } else {
        this.navMenuPosition = 'left';
      }
    });
  }

  toggleSidebar(): void {
    if (this.sidebarState === 'compacted') {
      this.sidebarState = 'expanded';
    } else {
      this.sidebarState = 'compacted';
    }
  }
}
