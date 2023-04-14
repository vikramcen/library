const express = require('express')

const { getAllBorrow,
  getBorrowById,
  editBorrowByID,
  deleteBorrow,
  addBorrow } = require('../controllers/borrowController');

const router = express.Router()

router.get('/', getAllBorrow)
router.get('/:id', getBorrowById)
router.put('/:id', editBorrowByID)
router.delete('/:id', deleteBorrow)
router.post('/', addBorrow)

module.exports = router