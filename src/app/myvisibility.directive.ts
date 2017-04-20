import { Directive, Input, HostBinding, OnInit, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements OnInit {
  @Input() isVisible: boolean = true;
  @HostBinding('style.display') display;

  constructor(private e: ElementRef, private r: Renderer) {
  }
  ngOnInit() {
    let displayValue: any = this.display = this.isVisible ? this.isVisible : 'none';
    this.r.setElementStyle(this.e.nativeElement, "display", displayValue);
  }
}