import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
})
export class DropdownDirective {
  dropdownOpen = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen)
      this.renderer.addClass(this.el.nativeElement, 'open');
    else this.renderer.removeClass(this.el.nativeElement, 'open');
  }
}
