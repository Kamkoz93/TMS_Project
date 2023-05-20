import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({ selector: '[appToggleView]' })
export class ToggleViewDirective {
  @Input('appToggleView')
  targetId: string = '';

  @HostBinding('class.active')
  public _isActiveSubject: BehaviorSubject<boolean> = new BehaviorSubject(
    false
  );

  constructor(private renderer: Renderer2) {}

  @HostListener('click')
  onClick() {
    const targetElement = document.getElementById(this.targetId);
    if (targetElement) {
      if (this._isActiveSubject.value) {
        this.renderer.removeClass(targetElement, 'show');
      } else {
        this.renderer.addClass(targetElement, 'show');
      }
      this._isActiveSubject.next(!this._isActiveSubject.value);
    }
  }
}
