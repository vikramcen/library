const { Schema, model } = require('mongoose');
const bookModel = require('./Book').schema;

const borrowModel = new Schema({

  book: {
    type: bookModel,
    ref: 'Book',
    required: true,
  },

  borrowDate: {
    type: Date,
    required: true,
  },
  dueDate: {
    type: Date,
  },
  returnDate: {
    type: Date,
  }
});

const Borrow = model('Borrow', borrowModel);

module.exports = Borrow;