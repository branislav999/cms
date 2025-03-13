import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  imports: [],
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {

  @Output() addMessageEvent = new EventEmitter<Message>();

  @ViewChild('subject') subjectInput: any;
  @ViewChild('msgText') msgTextInput: any;

  currentSender = "Branislav Bogosavac";

  onSendMessage() {

    const subject = this.subjectInput.nativeElement.value;
    const msgText = this.msgTextInput.nativeElement.value;

    const newMessage = new Message(
      '1',
      subject,
      msgText,
      this.currentSender
    )

    this.addMessageEvent.emit(newMessage);
  }

  onClear(){
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';

  }

}
