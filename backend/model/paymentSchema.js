const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    paymentMethod: {
      type: String,
    }, 
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
    // Other fields as needed
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
