import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'input[autofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }

}
