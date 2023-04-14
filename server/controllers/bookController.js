const User = require('../models/User');
const Book = require('../models/Book');

getAllBooks = async (req, res) => {
  await Book.find({}, (err, books) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!books) {
      return res
          .status(404)
          .json({ success: false, error: `Books not found!!` })
    }
    return res.status(200).json({ success: true, data: books })
  }).clone().catch(err => console.log(err))
}

getBookById = async (req, res) => {
  const body = req.body

  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'Student data not found',
      })
  }

  await Book.findOne({_id: body.id}, (err, book) => {
    if (err) {
      return res.status(404).json({
          err,
          message: 'Book not found!',
      })
    }
    if (!book) {
      return res
          .status(404)
          .json({ success: false, error: `Books not found!!` })
    }
    return res.status(200).json({ success: true, data: book })
  })
}

getBookSearch = async (req, res) => {
  const body = req.body
  await Book.find({title : { $regex: body.search, $options: "i" }}, (err, books) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!books) {
      return res
          .status(404)
          .json({ success: false, error: `Books not found!!` })
    }
    return res.status(200).json({ success: true, data: books })
  }).clone().catch(err => console.log(err))
}

editBookByID = (req, res) => {
  
  return res.status(200).json({ success: true, data: "editBookByID" })
}

deleteBook = async (req, res) => {
  await Book.findOneAndDelete({ _id: req.params.id }, (err, book) => {
    if (err) {
        return res.status(400).json({ success: false, error: err })
    }

    if (!book) {
        return res
            .status(404)
            .json({ success: false, error: `Book not found` })
    }

    return res.status(200).json({ success: true, data: book })
  }).catch(err => console.log(err))
}

addBook = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
        success: false,
        error: 'No book data provided',
    })
  }

  const book = new Book(body);

  if (!book) {
    return res.status(400).json({ success: false, error: err })
  }

  book
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            id: book._id,
            message: 'Book created!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            success: false,
            error: 'Book not created!',
        })
    })
}

module.exports = {
  getAllBooks,
  getBookById,
  getBookSearch,
  editBookByID,
  deleteBook,
  addBook
}