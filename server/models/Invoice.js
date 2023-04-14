const { Schema, model } = require('mongoose');

const invoiceModel = new Schema({

  amount: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  dueDate: {
    type: Date,
    unique: true
  },

  userId: 
  {
    type: String,
    required: true
  },

  paidDate: 
  {
    type: Date
  }
});

const Invoice = model('Invoice', invoiceModel);

module.exports = Invoice;