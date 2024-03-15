const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema({
  gameStationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "GameStation",
    required: true,
  },
  slots: [
    {
      timing: {
        type: String,
        required: true,
      },
      booking_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        default: null,
        //   required: true
      },
      payment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
        default: null,
        //   required: true
      },
      status: {
        type: String,
        enum: ["Available", "Booked"],
        default: "Available",
      },
    },
  ],
});

const Slot = mongoose.model("Slot", slotSchema);

module.exports = Slot;
