import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';


// need backend http server to collect form data and send it via email. 
// need httpclient set up in angular
// need to use rest apis
@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit {

  FormData: FormGroup;

  constructor(private builder: FormBuilder) {

  }
  ngOnInit() {
    this.FormData = this.builder.group({
      fullName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      Comment: new FormControl('', [Validators.required])
    })
  }

}
