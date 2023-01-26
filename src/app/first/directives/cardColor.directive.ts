import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[cardColor]',
})
export class cardColorDirective {
    @Input() color: string | undefined;

  constructor(private el: ElementRef) {}
  ngOnInit() {
    if(this.color == "inactive") {
        this.el.nativeElement.style.background = "#3399FF"
        this.el.nativeElement.style.color = "white"
    }else if(this.color == "active"){
        this.el.nativeElement.style.background = "#00CC00"
        this.el.nativeElement.style.color = "white"
    } else {
        this.el.nativeElement.style.background = "#FF9999"
        this.el.nativeElement.style.color = "white"
    }
  }
  
  @HostListener("click")
  fn() {
    this.el.nativeElement.style.background = "yellow"
    this.el.nativeElement.style.color = "black"

  }
}
