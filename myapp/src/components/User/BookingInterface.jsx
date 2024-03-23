import React, { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import "../Assets/CSS/UserGsSearch.css";
import ReactDatePicker from "react-datepicker";
import userApis from "../apis/UserApis";

const BookingInterface = () => {
  const { stationId, gameId } = useParams();
  const [gameData, setGameData] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Play Ways - Add Booking";
  }, []);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await userApis.getGamedata(stationId, gameId);
        setGameData(response.data);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };

    fetchGameData();
  }, [stationId, gameId]);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        if (!selectedDate) return;
        const formattedDate = selectedDate.toISOString().split("T")[0];
        // setLoading(true);
        const response = await userApis.fetchSlots(
          stationId,
          gameId,
          formattedDate
        );
        setSlots(response.data.slots);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching slots:", error);
      }
    };

    fetchSlots();
  }, [selectedDate, stationId, gameId]);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Selected Slot:", selectedSlot);

    const userId = localStorage.getItem("userId");

    const slotTiming = selectedSlot
      ? `${selectedSlot.timefrom} - ${selectedSlot.timeto}`
      : "";

    const bookingData = {
      userId: userId,
      slotDate: selectedDate.toISOString(),
      duration: gameData.time,
      game: gameId,
      paymentStatus: "pending",
      status: "confirmed",
      slotTiming: slotTiming,
    };

    try {
      const response = await userApis.addBookings(stationId, bookingData);

      console.log("Booking created successfully:", response);
    } catch (error) {
      console.error("Error creating booking:", error);
    }
  };

  return (
    <div id="bg-booking">
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center "
          style={{ minHeight: "90vh" }}
        >
          <div className="col-md-8 ">
            <div className="card shadow-lg ">
              <div className="card-body">
                <h2 className="card-title mb-4 text-lg-center">
                  Confirm Your Booking
                </h2>
                <hr />
                <h4 className="card-title">
                  Game : {gameData.game && gameData.game.name}
                </h4>
                <p className="card-text text-muted">{gameData.description}</p>
                <p className="card-text">Time : {gameData.time} minutes</p>
                <p className="card-text">
                  Price : <b>{gameData.slotPrice}</b>
                </p>{" "}
                <form onSubmit={handleSubmit}>
                  <div className="row g-3 mb-4">
                    <div className="col-md-12">
                      <label htmlFor="datePicker" className="form-label">
                        Date :
                      </label>{" "}
                      <ReactDatePicker
                        className="form-control"
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        minDate={new Date()}
                        maxDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Select the date"
                      />
                    </div>
                  </div>
                  {selectedDate && (
                    <>
                      {slots.length > 0 ? (
                        <div className="row row-cols-1 row-cols-md-4">
                          {slots.map((slotGroup, index) => (
                            <React.Fragment key={index}>
                              {slotGroup.slots.map((slot, slotIndex) => (
                                <div
                                  className="col"
                                  key={`${index}-${slotIndex}`}
                                >
                                  <button
                                    type="button"
                                    className={`btn m-1 rounded-pill ${
                                      slot.status === "Booked"
                                        ? "active disabled btn-secondary"
                                        : "btn-outline-primary"
                                    }`}
                                    onClick={() => handleSlotClick(slot)}
                                    disabled={slot.status === "Booked"}
                                  >
                                    {slot.timefrom} - {slot.timeto}
                                  </button>
                                </div>
                              ))}
                            </React.Fragment>
                          ))}
                        </div>
                      ) : (
                        <p>No slots available for the selected date</p>
                      )}
                    </>
                  )}
                  <hr />
                  <div className="row">
                    <div className="col-md-12 text-end">
                      <button
                        type="button"
                        className="btn btn-secondary me-2"
                        onClick={() =>
                          navigate(`/gameStation/${stationId}/games`)
                        }
                      >
                        Back
                      </button>
                      <button type="submit" className="btn btn-golden">
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInterface;
