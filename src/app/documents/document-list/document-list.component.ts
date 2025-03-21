import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentItemComponent } from '../document-item/document-item.component';
import { CommonModule } from '@angular/common';
import { DocumentService } from '../document.service';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-document-list',
  imports: [DocumentItemComponent, CommonModule, RouterModule],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent implements OnInit, OnDestroy {

  documents: Document[] = [];
  private subscription!: Subscription;

  constructor(private documentService: DocumentService){}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();

    this.subscription = this.documentService.documentListChangedEvent.subscribe((documentList: Document[]) => {
        this.documents = documentList;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
