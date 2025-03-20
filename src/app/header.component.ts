import { Component } from '@angular/core';
import { DropdownDirective } from './shared/dropdown.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cms-header',
  imports: [DropdownDirective, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  

}
