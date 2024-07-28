import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appErrorMessageTest]'
})
export class ErrorMessageTestDirective {

  constructor(private elementRef: ElementRef,) { }


  @HostListener('focus') onfocus(eventData: Event) {
    let ele: HTMLElement = this.elementRef.nativeElement;
    console.log('focus',  )

  }


  @HostListener('blur') onblur(eventData: Event) {
    let ele: HTMLElement = this.elementRef.nativeElement;
    console.log('blur',)

  }

}
