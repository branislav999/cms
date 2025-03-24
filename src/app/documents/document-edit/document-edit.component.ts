import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  originalDocument!: Document;
  document!: Document;
  editMode: boolean = false;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  

  ngOnInit(): void {
    this.document = {
      id: '',
      name: '',
      description: '',
      url: '',
      children: []
    };
    


    this.route.params.subscribe((params: Params) => {
      const id = params['id'];

      if (!id) {
        this.editMode = false;
        return;
      }

      const original = this.documentService.getDocument(id);
      if (!original) {
        return;
      }

      this.editMode = true;
      this.originalDocument = original;

      this.document = JSON.parse(JSON.stringify(original));
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const value = form.value;
    const newDocument: Document = new Document(
      this.originalDocument ? this.originalDocument.id : '',
      value.name,
      value.description,
      value.url,
      [] 
    );

    if (this.editMode) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }

    this.router.navigate(['/documents']);
  }

  onCancel() {
    this.router.navigate(['/documents']);
  }
}
