const express = require('express')

const { register, login, getUserById, editUser, getAllUsers } = require('../controllers/userController');

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/:id', getUserById)
router.put('/:id', editUser)
router.get('/', getAllUsers)

module.exports = router