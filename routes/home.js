const express = require('express');


const router = express.Router();

router.get('/', (req, res) => res.render('home', { siteTitle: "Book Shop!", activeNav: "home" }));
module.exports = router;