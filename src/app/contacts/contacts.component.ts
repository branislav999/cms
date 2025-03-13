import { Component } from '@angular/core';
import { Contact } from './contact.model';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cms-contacts',
  imports: [CommonModule, ContactDetailComponent, ContactListComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  selectedContact! : Contact; 

}
