import { Directive,Input,ElementRef,Renderer } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

@Input() itemtext:string;

  constructor(e:ElementRef,r:Renderer) {
      r.setElementStyle(e.nativeElement,"text-transform","uppercase");
   }

}
