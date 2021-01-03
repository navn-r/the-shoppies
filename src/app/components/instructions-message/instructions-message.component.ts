import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-instructions-message',
  templateUrl: './instructions-message.component.html',
  styleUrls: ['./instructions-message.component.css']
})
export class InstructionsMessageComponent implements OnInit {

  constructor() { }

  @Output()
  onClose: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

  onPressClose(): void {
    this.onClose.emit();
  }

}
