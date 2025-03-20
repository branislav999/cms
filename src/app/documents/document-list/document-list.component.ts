import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentItemComponent } from '../document-item/document-item.component';
import { CommonModule } from '@angular/common';
import { DocumentService } from '../document.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cms-document-list',
  imports: [DocumentItemComponent, CommonModule, RouterModule],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent implements OnInit {

  documents: Document[] = [];

  constructor(private documentService: DocumentService){}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();

    this.documentService.documentChangedEvent.subscribe((receivedDocuments: Document[]) => {
      this.documents = receivedDocuments;
    })
  }

}
