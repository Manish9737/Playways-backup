import React, { useEffect, useState } from "react";
import hostApis from "../apis/HostApis";
import { Link, useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const GameStationBookings = () => {
  const { stationId } = useParams();
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await hostApis.getAllBookingsOfGs();
        setBookings(response.data.bookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [stationId]);

  const handleCheckBooking = (id) => {
    const booking = bookings.find((booking) => booking._id === id);
    setSelectedBooking(booking);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="container mt-4">
        {/* Sitemap Path */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mt-2">
            <li className="breadcrumb-item">
              <Link to="/admin/" className="text-warning">
                Admin
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Bookings
            </li>
          </ol>
        </nav>

        <h2 className="text-center mb-4 ">Bookings</h2>
        <div
          className="table-responsive"
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Booking ID</th>
                <th scope="col">Game</th>
                <th scope="col">User</th>
                <th scope="col">GameStation</th>
                <th scope="col">Slot Timing</th>
                {/* <th scope="col">Booking Date</th> */}
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking._id}</td>
                  <td>{booking.game}</td>
                  <td>{booking.userId.userName}</td>
                  <td>{booking.gameStationId.name}</td>
                  <td>{booking.slotDateTime}</td>
                  {/* <td>{booking.createdAt}</td> */}
                  <td>{booking.status}</td>
                  <td>
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => handleCheckBooking(booking._id)}
                    >
                      Check Booking
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking && (
            <div>
              <p>
                <strong>Booking ID:</strong> {selectedBooking._id}
              </p>
              <p>
                <strong>Game:</strong> {selectedBooking.game}
              </p>
              <p>
                <strong>User:</strong> {selectedBooking.userId.userName}
              </p>
              <p>
                <strong>GameStation:</strong>{" "}
                {selectedBooking.gameStationId.name}
              </p>
              <p>
                <strong>Slot Timing:</strong> {selectedBooking.slotDateTime}
              </p>
              <p>
                <strong>Duration:</strong> {selectedBooking.duration}
              </p>
              <p>
                <strong>Booking Time:</strong> {selectedBooking.createdAt}
              </p>
              <p>
                <strong>Status:</strong> {selectedBooking.status}
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GameStationBookings;
