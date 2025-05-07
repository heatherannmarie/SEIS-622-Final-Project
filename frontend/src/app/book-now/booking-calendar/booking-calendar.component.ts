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
  selectedStaff: string | null = null;
  selectedService: string | null = null;


  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getCalendar().subscribe(data => {
      console.log('Received calendar data', data)
      this.calendar = data;
    });
  }

  currentWeekStart = 0;

  get visibleWeek(): AppointmentDay[] {
    return this.calendar.slice(this.currentWeekStart, this.currentWeekStart + 7);
  }

  nextWeek() {
    if (this.currentWeekStart + 7 < this.calendar.length) {
      this.currentWeekStart += 7;
    }
  }

  previousWeek() {
    if (this.currentWeekStart - 7 >= 0) {
      this.currentWeekStart -= 7;
    }
  }

  selectedDay: AppointmentDay | null = null;

  selectDay(day: AppointmentDay) {
    this.selectedDay = day;
  }

  pendingBooking: { date: string, slot: string } | null = null;

  confirmBooking(date: string, slot: string) {
    this.pendingBooking = { date, slot };
  }

  finalizeBooking() {
    if (!this.pendingBooking) return;

    const { date, slot } = this.pendingBooking;
    this.book(date, slot);
    this.pendingBooking = null;
    this.selectedDay = null; // optionally reset after booking
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