const Borrow = require('../models/Borrow');
const Book = require('../models/Book');

getAllBorrow = async (req, res) => {
  await Borrow.find({}, (err, borrows) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!borrows) {
      return res
          .status(404)
          .json({ success: false, error: `Books not found!!` })
    }
    return res.status(200).json({ success: true, data: borrows })
  }).clone().catch(err => console.log(err))
}

getBorrowById = (req, res) => {
  
  return res.status(200).json({ success: true, data: "getBorrowById" })
}

editBorrowByID = (req, res) => {
  
  return res.status(200).json({ success: true, data: "editBorrowByID" })
}

deleteBorrow = (req, res) => {
  
  return res.status(200).json({ success: true, data: "deleteBorrow" })
}

addBorrow = (req, res) => {
  
  return res.status(200).json({ success: true, data: "addBook" })
}

module.exports = {
  getAllBorrow,
  getBorrowById,
  editBorrowByID,
  deleteBorrow,
  addBorrow,
}