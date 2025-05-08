import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})

export class ContactFormComponent {

  personName: string;
  saveUnsuccessful: boolean;
  emailAddress: string;
  message: string;

  constructor(public httpClient: HttpClient) {

  }

  onFormSubmit(ngForm: NgForm) {
    this.saveUnsuccessful = false;

    if (!ngForm.valid) {
      this.saveUnsuccessful = true;
      return;
    } console.log(ngForm);

    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      })
    };

    const data = {
      name: this.personName,
      email: this.emailAddress,
      message: this.message
    };

    this.httpClient.post<any>("http://localhost:3000/api/contact", data, options).subscribe({
      next: () => {
        console.log("Call successful", data);
      },
      error: (err) => {
        console.log("Error: ", err);
        console.log(data)
      }
    })

    ngForm.resetForm();
  }

}
