import express from "express"; // Import Express
const app = express(); // Create app instance
const PORT = process.env.PORT; // Use dynamic Heroku port or 3001 locally

import phones from "./data/Phones"; // Import your phone data

// Define API route
app.get("/api/phones", (req, res) => {
  res.json(phones);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
