const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoDB = require("./db");

// Connect to MongoDB
mongoDB();

// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://66086369cac645229872e408--merry-chimera-a008eb.netlify.app/");
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
