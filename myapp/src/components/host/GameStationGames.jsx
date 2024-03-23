import React, { useCallback, useEffect, useState } from "react";
import hostApis from "../apis/HostApis";
import { Link, useNavigate, useParams } from "react-router-dom";

const GameStationGames = () => {
  const { stationId } = useParams();
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PlayWays Host - Games"
  })


  const fetchGamesOfGameStation = useCallback(async () => {
    try {
      setLoading(true);
      const response = await hostApis.getAllGamesOfGs(stationId);
      setGames(response.data.games);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching games:", error);
      setLoading(false);
    }
  }, [stationId]);

  useEffect(() => {
    fetchGamesOfGameStation();
  }, [stationId, fetchGamesOfGameStation]);


  return (
    <>
      <div className="container">
        {/* Sitemap Path */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mt-2">
            <li className="breadcrumb-item">
              <Link to="/host/gameStations" className="text-warning">
                GameStation
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Games
            </li>
          </ol>
        </nav>

        <h1 className="text-center my-4">Games</h1>
        <button
          className="btn btn-golden mb-3"
          onClick={() => navigate(`/host/gamestation/${stationId}/addGames`)}
        >
          Add Game
        </button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-4">
            {games.map((game) => (
              <div className="col mb-4" key={game.id}>
                <div className="card shadow" style={{maxWidth: "300px"}}>
                  <img
                    src={`${process.env.REACT_APP_baseUrl}${game.image}`}
                    alt=""
                    className="img-fluid"
                    style={{
                      aspectRatio: "1/0.8",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{game.name}</h4>
                    <p className="card-text">Timing: {game.timing} Minutes</p>
                    <p className="card-text">Description: {game.description}</p>
                    <p className="card-text">Slot Price: <b>{game.slotPrice}</b></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Game to Game Station</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <select
                  className="form-select mb-3"
                  onChange={(e) => setSelectedGame(e.target.value)}
                  value={selectedGame}
                >
                  <option value="">Select a game</option>
                  {allGames.length > 0 &&
                    allGames.map((game) => (
                      <option key={game._id} value={game._id}>
                        {game.name}
                      </option>
                    ))}
                </select>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <div className="text-end">
                  <button
                    className="btn btn-secondary me-2"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button className="btn btn-success" onClick={handleAddGame}>
                    Add Game
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default GameStationGames;
