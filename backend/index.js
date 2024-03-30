const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoDB = require("./db");

// Connect to MongoDB
mongoDB();

// CORS middleware
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://66086a799a3fbbe07c1d49f3--dazzling-syrniki-74fd74.netlify.app/",
    "*",
    "http://localhost:3000"
  ]; // Add your allowed URLs here

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
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


// const express = require('express');
// const app = express();
// const port = process.env.PORT || 4000;
// const mongoDB = require("./db");

// // Connect to MongoDB
// mongoDB();

// // CORS middleware
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Change to your frontend URL
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Credentials", true); // Allow credentials
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// });

// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Route handlers
// app.use('/api', require("./routes/CreateUser"));
// app.use('/api', require("./routes/DisplayData"));
// app.use('/api', require("./routes/OrderData"));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
