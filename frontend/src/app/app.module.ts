import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingCalendarComponent } from './book-now/booking-calendar/booking-calendar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SpaComponent } from './spa/spa.component';
import { StaffComponent } from './staff/staff.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PoliciesComponent } from './policies/policies.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ContactFormComponent } from './contact-us/contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';
import { BibliographyComponent } from './bibliography/bibliography.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingCalendarComponent,
    AboutComponent,
    ServicesComponent,
    SpaComponent,
    StaffComponent,
    ContactUsComponent,
    PoliciesComponent,
    BookNowComponent,
    ContactFormComponent,
    HomeComponent,
    BibliographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [provideRouter(routes), provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
