const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    slotDateTime: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    gameStationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "GameStation",
      required: true,
    },
    game: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
