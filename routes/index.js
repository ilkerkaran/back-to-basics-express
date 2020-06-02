const express = require('express');
const adminRouter = require('./admin');
const shopRouter = require('./shop');
const homeRouter = require('./home');

const router = express.Router();
router.use('/shop', shopRouter);
router.use('/admin', adminRouter);
router.use('/', homeRouter);

module.exports = router;