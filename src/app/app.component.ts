import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { CommonModule } from '@angular/common';
import { MessageListComponent } from './messages/message-list/message-list.component';

@Component({
  selector: 'cms-root',
  imports: [CommonModule, HeaderComponent, ContactsComponent, DocumentsComponent, MessageListComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms';
  loadedFeature = 'contacts';


  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
