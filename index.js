const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const config = require('./config/db');
const announcementRoutes = require('./routes/announcements');

const app = express();

const PORT = process.env.PORT || 8080;

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));
app.use(morgan('combined'));

app.use(cors());
app.use(express.json());

app.use('/api/announcements', announcementRoutes);

mongoose.connect(config.db, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connection to database was successful');
});

mongoose.connection.on('error', (err) => {
  console.log('Connection to database was not successful' + err);
});

app.listen(PORT, () => {
  console.log('Server has been started');
});
