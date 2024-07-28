import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppIf]'
})
export class AppIfDirective {

  constructor(private containerref: ViewContainerRef, private view: TemplateRef<any>) {
    // console.log(view, containerref)
  }

  @Input('appAppIf') set display(dis: boolean) {
    if (dis) {
      this.containerref.createEmbeddedView(this.view)
    } else {
      this.containerref.clear();
    }
  }

}
