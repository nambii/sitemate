const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// CREATE Endpoint
app.post("/issues", function (req, res) {
  // Get the JSON object from the request body.
  const data = req.body;

  // Print json
  console.log("Created Issue");
  console.log(data);

  // Return a success
  res.send("Issue created");
});

// GET Endpoint
app.get("/issues/:id", function (req, res) {
  // Return JSON response.
  res.json({
    id: "1",
    title: "Test Issue",
    description: "Test Description",
    status: "in-development",
  });
});

// UPDATE Endpoint
app.patch("/issues/:id", function (request, res) {
  const data = request.body;
  console.log("Updated Issue");
  // Print json
  console.log(data);

  // Return a success
  res.send("Issue updated");
});

// DELETE Endpoint
app.delete("/issues/:id", function (req, res) {
  // Get the resource from the database.

  console.log("Deleted Issue");
  // Id to delete
  console.log(req.params.id);

  // Return a successç
  res.send("Issue deleted");
});

app.listen(3000, function () {
  console.log("Server started at http://localhost:3000");
});
