import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookNowComponent } from './book-now/book-now.component';
import { BookingCalendarComponent } from './book-now/booking-calendar/booking-calendar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactFormComponent } from './contact-us/contact-form/contact-form.component';
import { PhotoBannerComponent } from './photo-banner/photo-banner.component';
import { PoliciesComponent } from './policies/policies.component';
import { ServicesComponent } from './services/services.component';
import { ServiceMenuComponent } from './services/service-menu/service-menu.component';
import { SpaComponent } from './spa/spa.component';
import { StaffComponent } from './staff/staff.component';
import { StaffBioComponent } from './staff/staff-bio/staff-bio.component';

const routes: Routes = [
  { path: 'about-component', component: AboutComponent },
  { path: 'book-now-component', component: BookNowComponent },
  { path: 'booking-calendar-component', component: BookingCalendarComponent },
  { path: 'contact-us-component', component: ContactUsComponent },
  { path: 'contact-form-component', component: ContactFormComponent },
  { path: 'photo-banner-component', component: PhotoBannerComponent },
  { path: 'policies-component', component: PoliciesComponent },
  { path: 'services-component', component: ServicesComponent },
  { path: 'services-menu-component', component: ServiceMenuComponent },
  { path: 'spa-component', component: SpaComponent },
  { path: 'staff-component', component: StaffComponent },
  { path: 'staff-bio-component', component: StaffBioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export { routes };
