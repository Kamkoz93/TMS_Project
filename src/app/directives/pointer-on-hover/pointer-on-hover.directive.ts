import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[appPointerOnHover]' })
export class PointerOnHoverDirective {
      constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
    
      @HostListener('mouseenter')
      onMouseEnter() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
      }
    
      @HostListener('mouseleave')
      onMouseLeave() {
        this.renderer.removeStyle(this.elementRef.nativeElement, 'cursor');
      }
    }
