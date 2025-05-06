import { Component, OnInit } from '@angular/core';
import { AppointmentService, AppointmentDay } from '../services/appointment.service';


@Component({
  selector: 'app-booking-calendar',
  standalone: false,
  templateUrl: './booking-calendar.component.html',
  styleUrls: ['./booking-calendar.component.css']
})
export class BookingCalendarComponent implements OnInit {
  calendar: AppointmentDay[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getCalendar().subscribe(data => {
      this.calendar = data;
    });
  }

  book(date: string, slot: string) {
    this.appointmentService.bookSlot(date, slot).subscribe({
      next: () => {
        alert(`Booked ${slot} on ${date}`);
        // remove the slot from UI
        const day = this.calendar.find(d => d.date === date);
        if (day) {
          day.appointments = day.appointments.filter(s => s !== slot);
        }
      },
      error: () => alert('Failed to book appointment.')
    });
  }
}