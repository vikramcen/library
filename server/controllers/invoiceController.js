const Invoice = require('../models/Invoice')

getAllInvoices = async (req, res) => {
  await Invoice.find({}, (err, invoices) => {
    if (err) {
      return res.status(400).json({ success: false, error: err })
    }
    if (!invoices) {
      return res
          .status(404)
          .json({ success: false, error: `There are no invoices currently.` })
    }
    return res.status(200).json({ success: true, data: invoices })
  }).clone().catch(err => console.log(err))
}

getInvoiceById = (req, res, id) => {
    const body = req.body;
	Invoice.findOne({
        _id: body.id
	}, (err, invoice) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Invoice not found!',
            })
          }
          if (!invoice) {
            return res
                .status(404)
                .json({ success: false, error: `No invoice by that ID.` })
          }
          return res.status(200).json({ success: true, data: invoice })
	});
}; 

editInvoiceByID = function(req, res, next) {
    const body = req.body;
    Invoice.findByIdAndUpdate(body.id, req.body, function (err, invoice) {
      if (err) {
        console.log(err);
        return next(err);
      }
      res.json(invoice);
    });
};

deleteInvoice = async (req, res) => {
  await Invoice.findOneAndDelete({ _id: req.params.id }, (err, invoice) => {
    if (err) {
        return res.status(400).json({ success: false, error: err })
    }

    if (!invoice) {
        return res
            .status(404)
            .json({ success: false, error: `There is no invoice by that ID.` })
    }

    return res.status(200).json({ success: true, data: invoice })
  }).catch(err => console.log(err))
}

addInvoice = (req, res) => {
  const body = req.body

  if (!body) {
    return res.status(400).json({
        success: false,
        error: 'No invoice data provided',
    })
  }

  const invoice = new Invoice(body);

  if (!invoice) {
    return res.status(400).json({ success: false, error: err })
  }

  invoice
    .save()
    .then(() => {
        return res.status(201).json({
            success: true,
            id: invoice._id,
            message: 'Invoice created!',
        })
    })
    .catch(error => {
        return res.status(400).json({
            success: false,
            error: 'Invoice not created!',
        })
    })
}

module.exports = {
  getAllInvoices,
  getInvoiceById,
  editInvoiceByID,
  deleteInvoice,
  addInvoice
}