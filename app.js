import express from "express";
const app = express();
const port = 8080 // You can choose any available port

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello !");
});

//added about route
app.get("/about", (req, res) => {
  res.send("This is the about page.");
});
app.get("/contact", (req, res) => {
  res.send("This is the contact page.");
});

// Start the server
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

