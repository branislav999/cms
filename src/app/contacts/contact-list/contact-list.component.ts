import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { CommonModule } from '@angular/common';
import { ContactService } from '../contact.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-contact-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;

  constructor(private contactService: ContactService) {}

  contacts: Contact[] = [];

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts()

    this.subscription = this.contactService.contactChangedEvent.subscribe((changedContacts: Contact[]) => {
      this.contacts = changedContacts;
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}
