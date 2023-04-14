const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bookRoutes = require('./bookRoutes');
const borrowRoutes = require('./borrowRoutes');
const invoiceRoutes = require('./invoiceRoutes')

router.use('/user', userRoutes);
router.use('/book', bookRoutes);
router.use('/borrow', borrowRoutes);
router.use('/invoice', invoiceRoutes);

module.exports = router;