import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'sny-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksListComponent {

  @Input() items: NbMenuItem[];
  @Input() title: string;

  constructor() {}

}
