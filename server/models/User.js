const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt');

const bookModel = require('./Book').schema;
const borrowModel = require('./Borrow').schema;

const userModel = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must use a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  borrowed: [borrowModel],
  searchHistory: [String],
},
{
  toJSON: {
    virtuals: true,
  }
}
)

userModel.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userModel.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userModel);

module.exports = User;