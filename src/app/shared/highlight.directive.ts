import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { 
  }

  @HostListener('mouseenter') hightlight(){
    this.element.nativeElement.style.backgroundColor = "#FFB6C1";
  }

  @HostListener('mouseleave') cancelHightlight(){
    this.element.nativeElement.style.backgroundColor = null;
  }

}
