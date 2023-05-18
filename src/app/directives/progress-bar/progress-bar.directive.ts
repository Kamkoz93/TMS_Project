import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[appProgressBar]' })
export class ProgressBarDirective implements OnInit {
  @Input('appProgressBar') value: number = 0;
  @Input() multiColor?: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const progressBar = this.elementRef.nativeElement;
    const multiColor = this.multiColor;
    if (multiColor) {
      this.value < 50
        ? this.renderer.addClass(progressBar, 'bg-danger')
        : this.value === 100
        ? this.renderer.addClass(progressBar, 'bg-success')
        : this.renderer.addClass(progressBar, 'bg-warning');
    }
    this.renderer.setStyle(progressBar, 'width', `${this.value}%`);
    this.renderer.setAttribute(progressBar, 'aria-valuenow', `${this.value}`);
  }
}
