import { Directive } from '@angular/core';

@Directive({
  selector: '[appOnlyNumber]',
  standalone: false
})
export class OnlyNumberDirective {

  constructor() { }

}
