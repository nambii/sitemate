const express = require("express");

const app = express();

// CREATE Endpoint
app.post("/issues", function (req, res) {
  // Get the JSON object from the request body.
  const data = req.body;

  // Print json
  console.log(data);

  // Return a success
  res.send(201);
});

// GET Endpoint
app.get("/issues/:id", function (req, res) {
  // Return JSON response.
  res.json({ id: "1", first_name: "Hey", surname: "Jude" });

  // Return a success
  res.send(200);
});

// UPDATE Endpoint
app.patch("/issues/:id", function (req, res) {
  // Print json
  console.log(data);

  // Return a success
  res.send(200);
});

// DELETE Endpoint
app.delete("/issues/:id", function (req, res) {
  // Get the resource from the database.

  // Id to delete
  console.log(req.params.id);

  // Return a success
  res.send(200);
});

app.listen(3000, function () {
  console.log("Server started at http://localhost:3000");
});
