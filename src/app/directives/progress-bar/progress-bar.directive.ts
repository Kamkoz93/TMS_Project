import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[appProgressBar]' })
export class ProgressBarDirective implements OnInit {
  @Input('appProgressBar') value?: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const progressBar = this.elementRef.nativeElement;
    this.renderer.setStyle(progressBar, 'width', `${this.value}%`);
    this.renderer.setAttribute(progressBar, 'aria-valuenow', `${this.value}`);
  }
}
