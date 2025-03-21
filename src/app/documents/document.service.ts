import { EventEmitter, Injectable } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documents: Document[] = [];
  maxDocumentId!: number;

  documentSelectedEvent = new EventEmitter<Document>();

  documentListChangedEvent  = new Subject<Document[]>();


  constructor() {
    this.documents = MOCKDOCUMENTS;
    this.maxDocumentId = this.getMaxId();
   }

   getDocuments() {
    return this.documents.slice();
   }

   getDocument(id: string) {
    for (const document of this.documents){
      if (document.id === id) {
        return document;
      }
    }
    return null;
   }

   addDocument(newDocument: Document){
    if (!newDocument){
      return
    }

    this.maxDocumentId++;
    newDocument.id = this.maxDocumentId.toString();
    this.documents.push(newDocument);

    this.documentListChangedEvent.next(this.documents.slice());
    
   }

   updateDocument(originalDocument: Document, newDocument: Document){
    if (!originalDocument || !newDocument) {
      return;
    }

    const pos = this.documents.indexOf(originalDocument);
    if (pos < 0){
      return;
    }

    newDocument.id = originalDocument.id;
    this.documents[pos] = newDocument;

    this.documentListChangedEvent.next(this.documents.slice());
    
   }


   deleteDocument(document: Document) {
    if (!document) {
      return; 
    }
  
    const pos = this.documents.indexOf(document); 
    if (pos < 0) {
      return; 
    }
  
    this.documents.splice(pos, 1); 
  
    this.documentListChangedEvent.next(this.documents.slice());
  }


    getMaxId(): number{
      let maxId = 0;
      for (const document of this.documents) {
        const currentId = parseInt(document.id, 10)
        if (currentId > maxId) {
          maxId = currentId;
        }
      }
      return maxId;
    }

    

}
