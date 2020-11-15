import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'sny-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClockComponent implements OnInit, OnDestroy {

  currentDate: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());
  private interval: any;

  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.currentDate.next(new Date());
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
