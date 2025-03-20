import { Component, Input, OnInit } from '@angular/core';
import { DocumentDetailComponent } from './document-detail/document-detail.component';
import { DocumentListComponent } from './document-list/document-list.component';
import { Document } from './document.model';
import { CommonModule } from '@angular/common';
import { DocumentService } from './document.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'cms-documents',
  imports: [DocumentListComponent, CommonModule, RouterModule],
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
