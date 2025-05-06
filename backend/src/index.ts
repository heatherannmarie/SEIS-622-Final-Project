const express = require('express');
import contactRoutes from './routes/contactForm';
import appointmentRoutes from './routes/appointmentCalendar';
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json()); // for parsing JSON bodies

// Mount routes
app.use('/api/contact', contactRoutes);
app.use('/api/appointments', appointmentRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});