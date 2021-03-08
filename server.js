const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

//Connect database to server
connectDB();

//Init middleware for parsing
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API RUNNING'));

// Define routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

app.listen(PORT, () =>
  console.log(`App connected and server started on port ${PORT}`)
);
