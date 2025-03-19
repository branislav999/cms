import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  imports: [],
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {

  @Output() addMessageEvent = new EventEmitter<Message>();

  @ViewChild('subject', { static: false }) subjectInput: any;
  @ViewChild('msgText', { static: false }) msgTextInput: any;

  constructor(private messageService: MessageService){}

  currentSender = "7";

  onSendMessage() {

    const subject = this.subjectInput.nativeElement.value;
    const msgText = this.msgTextInput.nativeElement.value;

    const newMessage = new Message(
      '10',
      subject,
      msgText,
      this.currentSender
    )
    console.log('message edit messages', newMessage);
    this.messageService.addMessage(newMessage);
  }

  onClear(){
    this.subjectInput.nativeElement.value = '';
    this.msgTextInput.nativeElement.value = '';

  }

}
