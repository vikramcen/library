const User = require('../models/User');
const Book = require('../models/Book');

const {authMiddleware, signInToken} = require('../utils/auth')

register = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
        success: false,
        error: 'No user data provided',
    })
  }

  if (body.username === "" || body.email === "" || body.password === "") {
    return res.status(400).json({
        success: false,
        error: 'Missing user data!!',
    })
  }
 
  const user = new User(body);
  console.log(user)
  if (!user) {
    return res.status(400).json({ success: false, error: err })
  }

  user
    .save()
    .then((userData) => {
      console.log(userData)
      const id = userData._id.valueOf()
      const token = signInToken(userData.username, userData.email, id)
      return res.status(201).json({
          success: true,
          token: token,
          message: 'User created!',
      })
    })
    .catch(error => {
        console.log(error)
        return res.status(400).json({
            success: false,
            error: 'User not created!',
        })
    })
}

login = async (req, res) => {
  const body = req.body;
  if (!body) {
    return res.status(400).json({
        success: false,
        error: 'No user data provided',
    })
  }

  if (body.email === "" || body.password === "") {
    return res.status(400).json({
        success: false,
        error: 'Missing user data!!',
    })
  }

  User.findOne({email: body.email}, async (err, user) => {
    if (err) {
      return res.status(404).json({
          err,
          message: 'User not found!',
      })
    }

    const correctPw = await user.isCorrectPassword(body.password);
    if (!correctPw) {
      return res.status(403).json({
        success: false,
        error: 'Incorrect password',
      })
    }
    else {
      const token = signInToken(user.username, user.email, user._id.valueOf())
      return res.status(201).json({
        success: true,
        token: token
      })
    }
  })
}

getUserById = (req, res) => {
  
  return res.status(200).json({ success: true, data: "survey" })
}

editUser = (req, res) => {
  return res.status(200).json({ success: true, data: "survey" })
}

getAllUsers = async (req, res) => {
  await User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!users) {
      return res
          .status(404)
          .json({ success: false, error: `Users not found!!` })
    }
    return res.status(200).json({ success: true, data: users })
  }).clone().catch(err => console.log(err))
}

module.exports = {
  register,
  login,
  getUserById,
  editUser,
  getAllUsers
}