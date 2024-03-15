import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const BookingInterface = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedVenue, setSelectedVenue] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedDate && selectedVenue && selectedTimeSlot) {
      console.log(
        "Booking submitted:",
        selectedDate,
        selectedVenue,
        selectedTimeSlot
      );
      // Handle form submission or API call here
      navigate("/paymentGateway");
    } else {
      console.log("Please fill in all fields");
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Fetch available time slots based on the selected date and venue
    // Update available time slots in the component state
  };

  const handleVenueChange = (event) => {
    setSelectedVenue(event.target.value);
    // Update available time slots based on the selected venue
    // Update available time slots in the component state
  };

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body border-1 border border-warning-subtle">
          <h2 className="card-title mb-4 text-lg-center">Booking Interface</h2>
          <form onSubmit={handleSubmit}>
            <div className="row g-3 mb-4">
              <div className="col-md-12">
                <label htmlFor="datePicker" className="form-label">
                  Date:
                </label>
                <DatePicker
                  id="datePicker"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-12">
                <label htmlFor="venueSelect" className="form-label">
                  Venue:
                </label>
                <select
                  id="venueSelect"
                  value={selectedVenue}
                  onChange={handleVenueChange}
                  className="form-select"
                >
                  <option value="">Select Venue</option>
                  {/* Render venue options dynamically */}
                  <option value="Venue A">Venue A</option>
                  <option value="Venue B">Venue B</option>
                  {/* Add more venues as needed */}
                </select>
              </div>
            </div>

            <div className="row g-3 mb-4">
              <div className="col-md-12">
                <label htmlFor="timeSlotSelect" className="form-label">
                  Time Slot:
                </label>
                <select
                  id="timeSlotSelect"
                  value={selectedTimeSlot}
                  onChange={handleTimeSlotChange}
                  className="form-select"
                >
                  <option value="">Select Time Slot</option>
                  {/* Render available time slots dynamically based on selected date and venue */}
                  {/* Example options */}
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  {/* Add more time slots as needed */}
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 d-flex justify-content-start">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={
                    !selectedDate || !selectedVenue || !selectedTimeSlot
                  }
                >
                  Book Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingInterface;
