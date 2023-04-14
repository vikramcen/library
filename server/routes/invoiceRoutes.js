const express = require('express')
var invoices = require('../controllers/invoiceController');

const { getAllInvoices,
    getInvoiceById,
    editInvoiceByID,
    deleteInvoice,
    addInvoice } = require('../controllers/invoiceController');

const router = express.Router()

router.get('/', getAllInvoices)
router.get('/:id', getInvoiceById)
router.put('/:id', editInvoiceByID)
router.delete('/:id', deleteInvoice)
router.post('/', addInvoice)

module.exports = router