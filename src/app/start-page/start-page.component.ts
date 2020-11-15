import { Component, OnInit } from '@angular/core';
import { NbIconConfig, NbMenuItem, NbThemeService } from '@nebular/theme';
import { DEFAULT_NAV_ITEMS } from './DefaultNavigationItems';

@Component({
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  isMobile = false;
  navigationItems: {title: string, icon?: string | NbIconConfig, items: NbMenuItem[]}[] = DEFAULT_NAV_ITEMS;

  constructor(private themeService: NbThemeService) {}

  ngOnInit(): void {
    this.themeService.onMediaQueryChange().subscribe(([previous, current]) => {
      this.isMobile = ['xs', 'is', 'sm', 'md'].includes(current.name);
    });
  }

}
