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
    new Message('1', 'Meeting Reminder', 'Don’t forget the team meeting at 10 AM.', 'John Doe'),
    new Message('2', 'Project Update', 'The project deadline has been extended to next Friday.', 'Jane Smith'),
    new Message('3', 'Lunch Plans', 'Let’s meet at the cafeteria at 12:30 PM.', 'Alice Johnson')
  ];

  onAddMessage(newMessage: Message) {
    this.messages.push(newMessage);
  }

}
