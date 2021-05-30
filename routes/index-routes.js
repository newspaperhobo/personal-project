const express = require('express');
const router = express.Router();
const siteRouter = require('./site-routes');
const libraryRouter = require('./library-routes')

router.use("/", siteRouter);
router.use("/library", libraryRouter);

module.exports = router;