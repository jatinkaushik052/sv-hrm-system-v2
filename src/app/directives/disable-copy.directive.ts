import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableCopy]',
  standalone: false
})
export class DisableCopyDirective {

  constructor() { }

 @HostListener('copy',['$event'])
 onCopy(event: ClipboardEvent){
  event.preventDefault();
  console.log("hello")
 }

}
