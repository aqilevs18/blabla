import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[statusColor]',
})
export class statusColorDirective {
    @Input() color: string | undefined;

  constructor(private el: ElementRef) {}
  ngOnInit() {
    if(this.color == "inactive") {
        this.el.nativeElement.style.background = "blue"
        this.el.nativeElement.style.color = "white"
    }else if(this.color == "active"){
        this.el.nativeElement.style.background = "green"
        this.el.nativeElement.style.color = "white"
    } else {
        this.el.nativeElement.style.background = "red"
        this.el.nativeElement.style.color = "white"
    }

    
  }

}
