import { Component, OnInit } from '@angular/core';
import { MessageItemComponent } from '../message-item/message-item.component';
import { MessageEditComponent } from '../message-edit/message-edit.component';
import { Message } from '../message.model';
import { CommonModule } from '@angular/common';
import { MessageService } from '../message.service';


@Component({
  selector: 'cms-message-list',
  imports: [CommonModule, MessageItemComponent, MessageEditComponent],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent implements OnInit {

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    this.messageService.messageChangedEvent.subscribe((newMessages: Message[]) => {
      this.messages = newMessages;

    })
  }

  messages: Message[] = [ ];

  onAddMessage(newMessage: Message) {
    this.messages.push(newMessage);
  }

}
