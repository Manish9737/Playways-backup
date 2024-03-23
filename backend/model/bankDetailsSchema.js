const mongoose = require("mongoose");

const bankDetailsSchema = new mongoose.Schema({
  hostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Host",
    required: true,
  },
  accountHolderName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  bankName: {
    type: String,
    required: true,
  },
  branch: String,
  ifscCode: String,
});

const BankDetails = mongoose.model("BankDetails", bankDetailsSchema);

module.exports = BankDetails;
