import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
 
  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.el.nativeElement.style.background = "red"
  }

  @HostListener("mouseover")
  fn() {
    this.el.nativeElement.style.background = "green"
  }
}
