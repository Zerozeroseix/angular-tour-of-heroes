import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {

  //----------------------------------------------------------------------//

  @Output("outsideClick")
  public clickOutside = new EventEmitter<MouseEvent>();

  //----------------------------------------------------------------------//

  constructor(private _elementRef: ElementRef) {
  }

  //----------------------------------------------------------------------//

  @HostListener('document:click', ['$event.path'])
  public onGlobalClick(targetElementPath: Array<any>) {
    const elementRefInPath = targetElementPath.find(e => e === this._elementRef.nativeElement);
    if (!elementRefInPath) {
      this.clickOutside.emit();
    }
  }

  //----------------------------------------------------------------------//

}//Cls
