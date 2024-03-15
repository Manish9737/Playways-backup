const Booking = require("../../model/bookingSchema");

const addBooking = async (req, res, next) => {
  try {
    const { userId, slotDateTime, duration, game, gameStationId } = req.body;

    const newBooking = new Booking({
      userId,
      slotDateTime,
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
    const bookings = await Booking.find().populate('userId').populate('gameStationId');;

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
