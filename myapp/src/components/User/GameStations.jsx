import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import userApis from "../apis/UserApis";
import Logo from "../imgs/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../Assets/CSS/UserGsSearch.css";
import { GridLoader } from "react-spinners";

const GameStations = () => {
  const [gameStations, setGameStations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchGameStations();
  }, []);

  useEffect(() => {
    document.title = "Play Ways - GameStations";
  }, []);

  const fetchGameStations = async () => {
    try {
      const response = await userApis.fetchGameStations();
      setTimeout(() => {
        setGameStations(response.data.gameStations);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleBookClick = (_id) => {
    navigate(`/gameStation/${_id}/games`);
  };

  const filteredStations = gameStations.filter(
    (station) =>
      station.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      station.status === "Allowed"
  );

  return (
    <>
      <div className="">
        <div className=" ">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb ms-4 mt-2">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-warning">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Game Stations
                  </li>
                </ol>
              </nav>
            </div>
          </nav>
        </div>
        <div className="container-fluid">
          <div
            className="row justify-content-center bg-opacity-25"
            id="bg-serach"
            style={{ minHeight: "200px" }}
          >
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className="input-group shadow  rounded-5">
                <input
                  type="text"
                  name="search"
                  placeholder="Search Game Stations..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="form-control form-control-lg"
                />
                <button className="btn btn-lg btn-golden">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="row justify-content-center"
            style={{
              overflowY: "auto",
              minHeight: "500px",
            }}
          >
            {loading ? ( 
              <div className="col-md-6 d-flex m-1 p-3 justify-content-center">
                <GridLoader
                  type="Oval"
                  color="#FFD700"
                  height={50}
                  width={50}
                />
              </div>
            ) : filteredStations.length === 0 ? (
              <div className="col-md-7 d-flex m-1 p-3 justify-content-center">
                <p>No stations available</p>
              </div>
            ) : (
              <div className="col-md-7 d-flex m-1 p-3 justify-content-center">
                <div className="card-container">
                  {filteredStations.map((station) => (
                    <div key={station._id} className="col-sm-6 col-md-12 mb-3">
                      <div className="card mb-3 shadow">
                        <div className="row">
                          <div className="col-md-5">
                            <img
                              src={
                                station.gsLogo
                                  ? `${process.env.REACT_APP_baseUrl}${station.gsLogo}`
                                  : Logo
                              }
                              className="img-fluid rounded-start"
                              alt={station.name}
                              style={{
                                aspectRatio: "1/1",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <div className="col-md-7">
                            <div className="card-body">
                              <h3 className="card-title text-golden">
                                {station.name}
                              </h3>
                              <span className="card-text ms-1">
                                Time : {station.openingTime || "07:00 AM"} to {station.closingTime || "12:00 AM"}
                              </span><br />
                              <span className="card-text text-muted ms-1">{station.address}</span>
                              <p className="card-text ms-1">{station.city}</p>
                              <button
                                to="#"
                                className="btn btn-golden"
                                onClick={() => handleBookClick(station._id)}
                              >
                                Book
                              </button>
                              <p className="card-text ms-1 mt-2">
                                <small className="text-muted">
                                  Sports: {station.games.length > 0 ? station.games.map(game => game.game.name).join(", ") : "Not available"}
                                </small>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameStations;
