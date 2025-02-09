import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[dropDownDirectiveRevision]'
})
export class DropdownDirectiveRevision{
@HostBinding('class.open') isDropdownOpen=false;
constructor(private elementRef:ElementRef, private renderer: Renderer2){}
@HostListener('click') dropDownClick(){
   this.isDropdownOpen=!this.isDropdownOpen;
}
}