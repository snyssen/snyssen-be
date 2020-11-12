import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {

  navigationItems: {title: string, items: NbMenuItem[]}[] = [
    {
      title: 'Placeholder 1',
      items: [
        {
          title: 'Profile',
          icon: 'person-outline',
          link: '/'
        },
        {
          title: 'Change Password',
          icon: 'lock-outline',
          url: 'https://snyssen.be'
        },
        {
          title: 'Privacy Policy',
          icon: { icon: 'checkmark-outline', pack: 'eva' },
        },
        {
          title: 'Logout',
          icon: 'unlock-outline',
        }
      ]
    }
  ];

  constructor() { }

}
