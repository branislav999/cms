import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-list',
  imports: [CommonModule, ContactItemComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {


  constructor(private contactService: ContactService) {}

  contacts: Contact[] = [];

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts()
  }


  onSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }
}
