const express = require("express");
const router = express.Router({ mergeParams: true });

router.use('/regions', require('./region.routes'))
router.use('/deputy', require('./deputy.routes'))
router.use('/rule', require('./rule.routes'))


module.exports = router