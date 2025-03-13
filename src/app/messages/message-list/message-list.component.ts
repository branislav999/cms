import { Component } from '@angular/core';
import { MessageItemComponent } from '../message-item/message-item.component';
import { MessageEditComponent } from '../message-edit/message-edit.component';
import { Message } from '../message.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'cms-message-list',
  imports: [CommonModule, MessageItemComponent, MessageEditComponent],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css'
})
export class MessageListComponent {
  messages: Message[] = [
    new Message('1', 'Ajde', 'I sve pare sveta da mi ponude', 'Novak Djokovic'),
    new Message('2', 'Sta ima buraz', 'Sta se radi buraz', 'Nikola Tesla'),
    new Message('3', 'Ide gas bre', 'A jel ima prase u gradu', 'Nikola Jokic')
  ];

  onAddMessage(newMessage: Message) {
    this.messages.push(newMessage);
  }

}
