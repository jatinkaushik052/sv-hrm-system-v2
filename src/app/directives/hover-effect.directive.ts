import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]',
  standalone: false
})
export class HoverEffectDirective {

  constructor(private el: ElementRef, private rendere: Renderer2) { 
    this.rendere.setStyle(this.el.nativeElement,'transition', 'all 0.3s ease');
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.rendere.setStyle(this.el.nativeElement, 'background-color', '#FFC20E');
    this.rendere.setStyle(this.el.nativeElement, 'color', 'black');
    this.rendere.setStyle(this.el.nativeElement, 'transform', 'scale(1.1)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.rendere.removeStyle(this.el.nativeElement, 'background-color');
    this.rendere.removeStyle(this.el.nativeElement, 'transform');
  }

}
