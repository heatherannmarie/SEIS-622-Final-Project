const express = require('express');
const router = express.Router();

type AppointmentCalendar = {
    date: string; // Store date as string for easier frontend use
    appointments: string[];
};

const calendar: AppointmentCalendar[] = [];
const defaultSlots = ["09:00", "10:00", "11:00", "14:00", "15:00"];

function createAppointmentCalendarWithSlots(): void {
    const startDate = new Date();

    for (let i = 0; i <= 90; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        calendar.push({
            date: date.toISOString().split('T')[0], // Use YYYY-MM-DD string
            appointments: [...defaultSlots],
        });
    }
}

createAppointmentCalendarWithSlots();

// Route: GET /api/appointments
router.get('/', (req, res) => {
    res.json(calendar);
});

// Route: POST /api/appointments/book
router.post('/book', (req, res) => {
    const { date, slot } = req.body;

    const day = calendar.find(d => d.date === date);
    if (!day) return res.status(404).json({ error: "Date not found" });

    const index = day.appointments.indexOf(slot);
    if (index === -1) return res.status(400).json({ error: "Slot not available" });

    day.appointments.splice(index, 1); // Remove the slot
    res.json({ success: true });
});

export default router;
