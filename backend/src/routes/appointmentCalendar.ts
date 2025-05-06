const express = require('express');
const router = express.Router();

type AppointmentCalendar = {
    date: Date;
    appointments: string[]; // Or replace `string` with a custom Appointment type
};

function createAppointmentCalendarWithSlots(): AppointmentCalendar[] {
    const calendar: AppointmentCalendar[] = [];
    const startDate = new Date();
    const defaultSlots = ["09:00", "10:00", "11:00", "14:00", "15:00"]; // example slots

    for (let i = 0; i <= 90; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        calendar.push({
            date,
            appointments: [...defaultSlots], // clone to avoid reference issues
        });
    }

    return calendar;

}

function bookAppointment(
    calendar: AppointmentCalendar[],
    targetDate: Date,
    slotToBook: string
): boolean {
    const dateStr = targetDate.toDateString();

    // Find the calendar entry matching the target date
    const dayEntry = calendar.find(entry => entry.date.toDateString() === dateStr);

    if (!dayEntry) {
        console.error("Date not found in calendar");
        return false;
    }

    const slotIndex = dayEntry.appointments.indexOf(slotToBook);
    if (slotIndex === -1) {
        console.error("Slot not available");
        return false;
    }

    // Remove the slot
    dayEntry.appointments.splice(slotIndex, 1);
    return true;
}

const calendar = createAppointmentCalendarWithSlots();
const today = new Date();

// Try to book "09:00" on today's date
const success = bookAppointment(calendar, today, "09:00");

if (success) {
    console.log("Appointment booked successfully!");
} else {
    console.log("Failed to book appointment.");
}

export default router;