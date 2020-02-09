const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('Entry', EntrySchema);
