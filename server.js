const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();
const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Get all books from database
app.get('/api/books', (req, res) => {
  db.Book.find({})
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.json(err);
    });
});

// Save a book to the database
app.post('/api/books', (req, res) => {
  db.Book.create({
    "title": "The Dark Tower",
    "author": "Stephen King",
    "description": "There are other worlds than these.",
    "image": "www.img.com",
    "link": "www.testlink.com"
  })
  .then(response => {
    console.log('Entry added to database');
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {useNewUrlParser: true})
.then(() => {
  console.log(`Successfully connected to MongoDB`);
})
.catch((err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}`);
});
