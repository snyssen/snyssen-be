import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { DEFAULT_NAV_ITEMS } from './DefaultNavigationItems';

@Component({
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {

  navigationItems: {title: string, items: NbMenuItem[]}[] = DEFAULT_NAV_ITEMS;
  constructor() { }

}
