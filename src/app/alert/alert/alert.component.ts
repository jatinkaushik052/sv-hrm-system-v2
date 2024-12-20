import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: false,

  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})
export class AlertComponent {
  @Input() popupType: string = 'add'
  @Output() closePopup: any = new EventEmitter(false)

  
  public add_closeModal() {
    this.closePopup.emit(false)
  }
}
