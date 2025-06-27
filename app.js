import express from "express";
const app = express();
const port = 3000; // You can choose any available port

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start the server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
