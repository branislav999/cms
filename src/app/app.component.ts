import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'cms-root',
  imports: [RouterOutlet, HeaderComponent, ContactsComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms';
}
