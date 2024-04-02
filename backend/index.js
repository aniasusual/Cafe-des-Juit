const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoDB = require("./db");

// Connect to MongoDB
mongoDB();

// CORS middleware
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*"); // Change to your frontend URL
//   res.header(
//     "Access-Control-Allow-Headers",
//     "origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// })
// CORS middleware
app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Set to your frontend URL
  res.setHeader("Access-Control-Allow-Origin", "https://660b9a48a1f59b7c6f292280--capable-pastelito-78c9f0.netlify.app"); // Set to your frontend URL
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true); // Allow credentials
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
});


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route handlers
app.use('/api', require("./routes/CreateUser"));
app.use('/api', require("./routes/DisplayData"));
app.use('/api', require("./routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
