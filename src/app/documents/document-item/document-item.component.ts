import { Component, Input } from '@angular/core';
import { Document } from '../document.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cms-document-item',
  imports: [RouterModule],
  templateUrl: './document-item.component.html',
  styleUrl: './document-item.component.css'
})
export class DocumentItemComponent {
  @Input() document!: Document;

  

}
