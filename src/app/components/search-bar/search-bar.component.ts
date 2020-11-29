import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sny-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent {
  searchTerms: string;

  constructor() { }

  search(): void {
    if (this.searchTerms) {
      window.location.href = 'https://duckduckgo.com/?q=' + encodeURIComponent(this.searchTerms);
    }
  }
}
