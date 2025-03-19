import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentItemComponent } from '../document-item/document-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cms-document-list',
  imports: [DocumentItemComponent, CommonModule],
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css'
})
export class DocumentListComponent {


  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1', 'Projektni Plan', 'Detaljan plan projekta', 'https://idemobrejako.com/projektni-plan', []),
    new Document('2', 'Zapisnik sa Sastanka', 'Beleške sa timskog sastanka', 'https://staimaburaz.com/zapisnik-sastanka', []),
    new Document('3', 'Izveštaj o Budžetu', 'Kvartalni izveštaj o budžetu', 'https://tusamjabe.com/budzet-izvestaj', []),
    new Document('4', 'Dizajn Makete', 'UI/UX dizajn makete', 'https://radimgradim.com/dizajn-makete', [])
  ];

  onSelectedDocument(document: Document) {

    this.selectedDocumentEvent.emit(document);
  }

}
