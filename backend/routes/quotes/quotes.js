var express = require("express");
var router = express.Router();
const {
  addQuotes,
  getallQuotes,
  updateQuote,
  deleteQuote,
} = require('../../controller/quote/quoteController');

require("dotenv").config();
// require("../../DB/conn");

router.post("/add", addQuotes); // add quotes to database
router.get('/getQuotes', getallQuotes); // Get quotes from database
router.put('/update/:id', updateQuote); // update quotes 
router.delete('/delete/:id', deleteQuote); // delete quotes from database


module.exports = router;
