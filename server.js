const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const EntryController = require('./src/controllers/EntryController');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://root:rootpassword@cluster0-srmct.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/entries', EntryController.store);
app.get('/entries', EntryController.index);
app.delete('/entries/:id', EntryController.destroy);

app.listen(3333, () => console.log('Server running on port 3333'));
