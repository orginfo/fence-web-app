import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Observable, Subject, throwError } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap, catchError
 } from 'rxjs/operators';

import { ProjectService } from '../../services/project.service';
import { ClientService } from '../../services/client.service';
import { ApiClient } from '../../models/apiclient';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;
  clients: Observable<ApiClient[]>;
  private searchTerms = new Subject<string>();
  now: Date;
  private readonly datePattern = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z";

  getFormField(fieldName: string): AbstractControl {
    return this.projectForm.get(fieldName);
  }

  isInvalid(fieldName: string): boolean {
    let field = this.projectForm.get(fieldName);
    return field.invalid && (field.dirty || field.touched);
  }

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private clientService: ClientService,
  ) {
    this.createForm();
  }

  search(term: string): void {
    this.projectForm.patchValue({clientId: ""});
    this.searchTerms.next(term);
  }

  createForm() {
    this.projectForm = this.formBuilder.group({
      clientFullName: ['', Validators.required ],
      clientId: ['', Validators.required ],
      nr: ['', Validators.required ],
      contractDate: ['', [Validators.required, Validators.pattern(this.datePattern)]],
      installDate: ['', [Validators.required, Validators.pattern(this.datePattern)]],
      address: ['', Validators.required ],
      comment: ['']
    });
  }

  private handleError(error: HttpErrorResponse) {
    debugger;
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

  onSubmit() {
      this.projectService.addProject(this.projectForm.value).
        pipe(
          catchError(this.handleError)
        ).
        subscribe(response => {console.log(response)});
  }

  ngOnInit() {
      this.now = new Date();
      this.clients = this.searchTerms.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(term => this.clientService.searchClients(term)),
      );
  }

}
