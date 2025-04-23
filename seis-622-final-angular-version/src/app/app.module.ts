import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceMenuComponent } from './service-menu/service-menu.component';
import { StaffBioComponent } from './staff-bio/staff-bio.component';
import { PhotoBannerComponent } from './photo-banner/photo-banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingCalendarComponent } from './booking-calendar/booking-calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceMenuComponent,
    StaffBioComponent,
    PhotoBannerComponent,
    HeaderComponent,
    FooterComponent,
    BookingCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
