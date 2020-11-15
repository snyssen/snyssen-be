import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NbIcon, NbIconConfig, NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'sny-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinksListComponent {

  @Input() items: NbMenuItem[];
  @Input() title: string;
  @Input() icon?: string | NbIconConfig;

  get iconAsStr(): string {
    if (this.getTypeOfIcon() !== 'string') { throw new Error('Icon is not a string !'); }
    return this.icon.toString();
  }
  get iconAsIcon(): NbIconConfig {
    if (this.getTypeOfIcon() !== 'object') { throw new Error('Icon is not an object !'); }
    return this.icon as NbIconConfig;
  }

  constructor() {}

  getTypeOfIcon(): 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' {
    return typeof this.icon;
  }
}
