import { Directive, inject, Input, input } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  element: ElementRef<HTMLElement> = inject(ElementRef);

  @Input() color = '#12F4FF';
  @Input() appHighlight = '#12F4FF';
  // color = input();

  @HostListener('mouseenter') enter() {
    this.resaltar(this.appHighlight);
  }

  @HostListener('mouseleave') leave() {
    this.resaltar('');
  }

  resaltar(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

  constructor() {
    // this.element.nativeElement.style.backgroundColor = '#12f4ff';
    // this.element.nativeElement.onmouseenter = () => {
    //   this.element.nativeElement.style.backgroundColor = '#12f4ff';
    // };
    // this.element.nativeElement.onmouseleave = () => {
    //   this.element.nativeElement.style.backgroundColor = '#ffffff';
    // };
  }
}
