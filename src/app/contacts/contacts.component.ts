import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CommonModule } from '@angular/common';
import { ContactService } from './contact.service';

@Component({
  selector: 'cms-contacts',
  imports: [CommonModule, ContactDetailComponent, ContactListComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {
  selectedContact! : Contact; 

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.contactSelectedEvent.subscribe((contact) => {
      this.selectedContact = contact;
    })
  }

}
