import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'sny-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
