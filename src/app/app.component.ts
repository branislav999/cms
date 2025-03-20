import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { CommonModule } from '@angular/common';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cms-root',
  imports: [CommonModule, HeaderComponent, RouterModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms';


}
