const express = require("express");

const app = express();

const PORT = 3000;


// Assignment 1 & Assignment 3
// Route Parameters + Query Parameters

app.get("/student/:id", (req, res) => {

    // Get student ID from route parameter
    const id = req.params.id;

    // Get name and course from query parameters
    const name = req.query.name;
    const course = req.query.course;

    // Assignment 1: No query parameters
    if (!name && !course) {
        res.send(`Student ID: ${id}`);
    }

    // Assignment 3: Query parameters provided
    else {
        res.send(`
            Student ID: ${id}<br>
            Name: ${name}<br>
            Course: ${course}
        `);
    }
});


// Assignment 2
// Query Parameters

app.get("/search", (req, res) => {

    const name = req.query.name;
    const course = req.query.course;

    // If no query parameters are provided
    if (!name && !course) {
        res.send("No search data provided.");
    }

    // If query parameters are provided
    else {
        res.send(`
            Name: ${name}<br>
            Course: ${course}
        `);
    }
});


// Start Server

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});