const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = express.Router();



const filePath = path.join(__dirname, 'contactFormResponses.json');

const { formResponses } = require('./formResponses');

let formResponsesList: typeof formResponses[] = [];

// Load initial data
try {
    const data = fs.readFileSync(filePath, 'utf8');
    formResponsesList = JSON.parse(data);
    console.log('Data loaded successfully from people.json');
} catch (err) {
    console.error(`Unable to read file: ${filePath}`);
    formResponsesList = [];
}

// GET endpoint to get all contacts
router.get("/", (req, res) => {
    if (req.query.id) {
        const person = formResponsesList.find(c => c.id == parseInt(req.query.id as string));
        if (person) {
            return res.status(200).json(person);
        }
        return res.status(404).json({
            error: "Contact list is not found."
        });
    }
    return res.status(200).json(formResponsesList);
});

//POST endpoint to add a new form response
router.post("/", (req, res) => {
    console.log("Received body:", req.body);

    // Validate required fields
    if (!req.body.name || !req.body.email || !req.body.message) {
        return res.status(500).json({ error: "Missing data" });
    }

    // Generate new ID
    const maxId = formResponsesList.length > 0 ? Math.max(...formResponsesList.map(c => c.id)) : 0;

    // Create new contact object
    const newResponse: typeof formResponses = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    };

    formResponsesList.push(newResponse);

    fs.writeFile(filePath, JSON.stringify(formResponsesList, null, 2), (err) => {
        if (err) {
            console.error("Failed to write to file:", err);
            return res.status(500).json({ error: "Failed to save data" });
        }

        return res.status(200).json(newResponse);
    });
});

// DELETE endpoint, currently not in use but we could try and implement it!
router.delete("/:id", (req, res) => {
    const responseId = parseInt(req.params.id);
    const responseIndex = formResponsesList.findIndex(c => c.id === responseId);

    if (responseIndex === -1) {
        return res.status(404).json({ error: "Response not found." });
    }

    const deletedContact = formResponsesList[responseIndex];
    formResponsesList.splice(responseIndex, 1);

    return res.status(200).json("Response deleted.");
});



export default router;

