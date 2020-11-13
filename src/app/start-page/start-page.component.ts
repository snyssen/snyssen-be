import { Component } from '@angular/core';
import { NbIconConfig, NbMenuItem } from '@nebular/theme';
import { DEFAULT_NAV_ITEMS } from './DefaultNavigationItems';

@Component({
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {

  navigationItems: {title: string, icon?: string | NbIconConfig, items: NbMenuItem[]}[] = DEFAULT_NAV_ITEMS;
  constructor() { }

}
