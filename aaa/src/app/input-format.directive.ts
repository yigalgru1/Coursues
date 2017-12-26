import { Directive, HostListener, Input, ElementRef } from '@angular/core';


@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el?: ElementRef) { }
  @Input('appInputFormat') format
  @HostListener('focus') onFocus() {
    console.log("on Focus");
  }
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;

    if (this.format == 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();



    console.log("on Blur");
  }
}
