import { Component, Input } from '@angular/core';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { Document } from './document.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cms-documents',
  imports: [DocumentDetailComponent, DocumentListComponent, CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {

  selectedDocument!: Document;

}
