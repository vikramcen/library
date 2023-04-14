const { Schema, model } = require('mongoose');

const bookModel = new Schema({

  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  isbn: {
    type: String,
  },

  genre: 
  {
    type: String
  },

  description: 
  {
    type: String
  },

  image: {
    type: String,
  },

  publishedDate: {
    type: String
  },

  price: {
    type: Number
  }
});

const Book = model('Book', bookModel);

module.exports = Book;