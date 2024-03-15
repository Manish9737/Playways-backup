const express = require("express");
const {
  addBooking,
  allBookings,
} = require("../../controller/bookings/bookingsController");
const router = express.Router();

router.post("/addBooking", addBooking); // add Booking
router.get("/allBookings", allBookings); // get all booking

module.exports = router;
