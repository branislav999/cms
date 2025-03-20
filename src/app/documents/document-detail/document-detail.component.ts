import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { WindRefService } from '../../wind-ref.service';


@Component({
  selector: 'cms-document-detail',
  imports: [RouterModule],
  templateUrl: './document-detail.component.html',
  styleUrl: './document-detail.component.css'
})
export class DocumentDetailComponent implements OnInit{

  document!: Document;
  nativeWindow: any;

  constructor(private documentService: DocumentService,
              private windowRefService: WindRefService,
              private route: ActivatedRoute, 
              private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const documentId = params['id'];
      const fetchedDocument = this.documentService.getDocument(documentId);
      if (fetchedDocument) {
        this.document = fetchedDocument;
      } else {
        console.log('Document not found');
      }    }) 

      this.nativeWindow = this.windowRefService.getNativeWindow();
  }

  onView(): void {
    const url = this.document.url;
    this.nativeWindow.open(url);
  }

  onDelete() {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/documents'])
  }

}
