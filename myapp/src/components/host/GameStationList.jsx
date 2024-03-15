import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import hostApis from "../apis/HostApis";

const GameStationList = () => {
  const [gameStations, setGameStations] = useState([]);
  const [filter, setFilter] = useState("Allowed");
  const hostId = localStorage.getItem("hostId");
  const navigate = useNavigate();

  useEffect(() => {
    const stationId = localStorage.getItem("selectedStationId");

    if (stationId) {
      navigate(`/host/gameStation/${stationId}`);
    }
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (hostId) {
          const response = await hostApis.getStationsByHostId(hostId);

          if (response.data.success) {
            setGameStations(response.data.gameStations);
          } else {
            console.error("Error fetching game stations:", response.data.error);
          }
        }
      } catch (error) {
        console.error("Error fetching game stations:", error.message);
      }
    };

    if (hostId) {
      fetchData();
    }
  }, [hostId]);

  const handleStationClick = (stationId) => {
    const selectedStationId = localStorage.setItem(
      "selectedStationId",
      stationId
    );

    if (selectedStationId !== stationId) {
      localStorage.setItem("selectedStationId", stationId);
    }

    setTimeout(() => {
      navigate(`/host/gameStation/${stationId}`);
    }, 500);
  };

  const filteredStations = gameStations.filter((station) => {
    if (filter === "All") {
      return true;
    } else {
      return station.status === filter;
    }
  });

  return (
    <div className="container mt-2">
      <Link to="/host/addGameStation" className="btn btn-golden mb-4">
        Add New Station
      </Link>

      <div className="mb-3">
        <button
          className="btn btn-outline-golden me-2 btn-lg btn-sm"
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className="btn btn-outline-golden me-2 btn-lg btn-sm"
          onClick={() => setFilter("Allowed")}
        >
          Allowed
        </button>
        <button
          className="btn btn-outline-golden me-2 btn-lg btn-sm"
          onClick={() => setFilter("Rejected")}
        >
          Rejected
        </button>
        <button
          className="btn btn-outline-golden btn-lg btn-sm"
          onClick={() => setFilter("Pending")}
        >
          Show Pending
        </button>
      </div>

      <div className="row row-cols-1 row-cols-md-4 justify-content-center g-4">
        {filteredStations.map((station) => (
          <div key={station._id} className="col">
            <div
              className="card h-100"
              onClick={() => handleStationClick(station._id)}
            >
              <img
                src={`${process.env.REACT_APP_baseUrl}${station.gsLogo}`}
                className="card-img-top w-100"
                style={{ aspectRatio: "1/1", objectFit: "cover" }}
                alt="Game Station Logo"
              />
              <div className="card-body">
                <h5 className="card-title">{station.name}</h5>
                <p className="card-text">Email: {station.email}</p>
                {/* <p className="card-text">Phone: {station.phone}</p>
                <p className="card-text">Address: {station.address}</p> */}
                <p className="card-text">
                  Status: <strong>{station.status}</strong>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameStationList;
