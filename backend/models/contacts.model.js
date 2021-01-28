const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactsSchema = new Schema({
  contactname: { type: String, required: true },
  phonenumber: { type: String, required: true },
}, {
  timestamps: true,
});

const Contacts = mongoose.model('Contacts', contactsSchema);

module.exports = Contacts;