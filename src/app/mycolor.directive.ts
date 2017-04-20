import { Directive, HostListener, HostBinding, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective implements HostListener {
  myColors: string[] = ['red', 'green', 'blue', 'yellow', 'white'];
  currentColor: string;
  @HostBinding('style.backgroundColor') BG;
  @Output() colorChanged: EventEmitter<string>;
  constructor() {
    this.colorChanged = new EventEmitter<string>();
  }
  
  @HostListener('click', ['$event'])
  changeColor() {
    let colorIndex: number = Math.floor((Math.random() * 4));
    this.currentColor = this.myColors[colorIndex];
    this.BG = this.currentColor
    this.colorChanged.emit(this.currentColor);
  }
}
