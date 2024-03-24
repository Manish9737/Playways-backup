const Booking = require("../../model/bookingSchema");
const Slot = require("../../model/slotsSchema");
const GameStation = require("../../model/gsSchema");
const Game = require("../../model/gameSchema");

const addBooking = async (req, res, next) => {
  const { gameStationId } = req.params;
  const { userId, slotDate, slotTiming, duration, game } = req.body;
  try {
    const newBooking = new Booking({
      userId,
      slotDate,
      slotTiming,
      duration,
      game,
      gameStationId,
    });

    await newBooking.save();

    res.status(201).json({
      message: "Booking created successfully",
      success: true,
      booking: newBooking,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
      success: false,
    });
  }
};

const allBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find()
      .populate("userId")
      .populate("gameStationId")
      .populate("game");

    res.status(200).json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addBooking,
  allBookings,
};
