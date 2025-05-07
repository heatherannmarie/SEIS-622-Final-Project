const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const appointmentsFilePath = path.join(__dirname, '../appointments.json');

type AppointmentCalendar = {
    date: string; // Store date as string for easier frontend use
    appointments: string[];
};

let calendar: AppointmentCalendar[] = [];
const defaultSlots = ["09:00", "10:00", "11:00", "14:00", "15:00"];

function loadCalendar() {
    if (fs.existsSync(appointmentsFilePath)) {
        const data = fs.readFileSync(appointmentsFilePath, 'utf8');
        if (data.trim().length === 0 || JSON.parse(data).length === 0) {
            console.warn('appointments.json was empty or had no appointments → regenerating');
            createAppointmentCalendarWithSlots();
            saveCalendar();
            console.log('Created new calendar and saved to file (regenerated)');
        } else {
            calendar = JSON.parse(data);
            console.log('Loaded calendar from file');
        }
    } else {
        createAppointmentCalendarWithSlots();
        saveCalendar();
        console.log('Created new calendar and saved to file');
    }
}

function saveCalendar() {
    fs.writeFileSync(appointmentsFilePath, JSON.stringify(calendar, null, 2));
}

function createAppointmentCalendarWithSlots(): void {
    const startDate = new Date();
    console.log('Populating calendar array...');

    for (let i = 0; i <= 90; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        calendar.push({
            date: date.toISOString().split('T')[0], // Use YYYY-MM-DD string
            appointments: [...defaultSlots],
        });
    }
    console.log(`Created ${calendar.length} days in calendar`);
}

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
    saveCalendar();
    res.json({ success: true });
});

loadCalendar();

export default router;
