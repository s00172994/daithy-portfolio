import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  
  public reactiveForm: FormGroup;
  public downloadForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      recaptchaReactive: new FormControl(null, Validators.required)
    });

    this.downloadForm = new FormGroup({ });
  }

  public goToURL(inputURL: string) {
    //window.open(inputURL, "_blank");
    window.location.href = inputURL;
  }
}
