import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropdownDirective {
  dropdownOpen = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event']) onClick(event: Event) {
    this.dropdownOpen = this.el.nativeElement.contains(event.target)
      ? !this.dropdownOpen
      : false;
    if (this.dropdownOpen)
      this.renderer.addClass(this.el.nativeElement, 'open');
    else this.renderer.removeClass(this.el.nativeElement, 'open');
  }
}
