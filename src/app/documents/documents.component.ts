import { Component, Input, OnInit } from '@angular/core';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { Document } from './document.model';
import { CommonModule } from '@angular/common';
import { DocumentService } from './document.service';

@Component({
  selector: 'cms-documents',
  imports: [DocumentDetailComponent, DocumentListComponent, CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent implements OnInit{

  constructor(private documetService: DocumentService) {}

  selectedDocument!: Document;

  ngOnInit(): void {
    this.documetService.documentSelectedEvent.subscribe((document) => {
      this.selectedDocument = document;
    })
  }





}
