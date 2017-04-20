import { Component, Input } from '@angular/core';

@Component
    ({
        selector: 'custom',
        template: `<div>
Test Custom Control
<ul *ngIf=mylist>
<li appMycolor (colorChanged)='onColorChanged($event)' appUpper appMyvisibility [isVisible]="visibleState" *ngFor='let item of mylist'>{{item}}</li>
</ul>
<p id="SelectedColor">{{selectedColor}}</p>
</div>

<span [style.font-size.px]="10"></span>`,
        inputs: ['mylist']
    })
export class AppCustom {
    visibleState: boolean;
    selectedColor:string="Default";
    @Input() mylist: string[];
    constructor() {
        this.visibleState = true;
    }
     onColorChanged(message:string):void
     {
         this.selectedColor=message;
     }
}