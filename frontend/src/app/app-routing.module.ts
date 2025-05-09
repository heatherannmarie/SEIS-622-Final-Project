import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookNowComponent } from './book-now/book-now.component';
import { BookingCalendarComponent } from './book-now/booking-calendar/booking-calendar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactFormComponent } from './contact-us/contact-form/contact-form.component';
import { PoliciesComponent } from './policies/policies.component';
import { ServicesComponent } from './services/services.component';
import { SpaComponent } from './spa/spa.component';
import { StaffComponent } from './staff/staff.component';
import { HomeComponent } from './home/home.component';
import { BibliographyComponent } from './bibliography/bibliography.component';

const routes: Routes = [
  { path: 'about-component', component: AboutComponent },
  { path: 'book-now-component', component: BookNowComponent },
  { path: 'booking-calendar-component', component: BookingCalendarComponent },
  { path: 'contact-us-component', component: ContactUsComponent },
  { path: 'contact-form-component', component: ContactFormComponent },
  { path: 'policies-component', component: PoliciesComponent },
  { path: 'services-component', component: ServicesComponent },
  { path: 'spa-component', component: SpaComponent },
  { path: 'staff-component', component: StaffComponent },
  { path: 'home-component', component: HomeComponent},
  { path: 'bibliography-component', component: BibliographyComponent},
  { path: '', redirectTo: '/home-component', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };
