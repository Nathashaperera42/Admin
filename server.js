const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const router = require('./routes/TaskRoutes'); // Import router

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Check if MONGO_URL is defined
if (!process.env.MONGO_URL) {
  console.error('Error: MONGO_URL environment variable is not defined.');
  process.exit(1);
}

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

// Use the router for API routes
app.post('/register', router);
app.get('/showregister', router);
app.delete('/users/:id', router);



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
