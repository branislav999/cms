import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cms-contact-detail',
  imports: [RouterModule],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent implements OnInit {
  contact! : any;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId) {
      this.contact = this.contactService.getContact(contactId);
    }


    this.route.params.subscribe(params => {
      const contactId = params['id']; 
      this.contact = this.contactService.getContact(contactId);
    
    });
  }

  onDelete(){
    this.contactService.deleteContact(this.contact);
    this.router.navigateByUrl('/contacts');
  }

  

}