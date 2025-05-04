import { Component } from '@angular/core';
import { ContactService } from '../../contact.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  formData = {
    name: '',
    emailAddress: '',
    message: '',
  }

  constructor(private http: HttpClient) { }

  onSubmit() {
    const fabformUrl = 'https://fabform.io/f/6rd4Ng6';

    this.http.post(fabformUrl, this.formData).subscribe(
      () => {
        console.log('Form submitted successfully!');
        // You can redirect or perform other actions after successful submission
      },
      (error) => {
        console.error('Error submitting the form:', error);
      }
    );
  }
}
