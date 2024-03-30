const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const mongoDB = require("./db");

// Connect to MongoDB
mongoDB();

// CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://66087052c09bc528d498c2ad--transcendent-lebkuchen-a2f933.netlify.app/");
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
