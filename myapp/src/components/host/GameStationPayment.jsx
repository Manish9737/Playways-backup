import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const GameStationPayment = () => {

  useEffect(() => {
    document.title = "PlayWays Host - Payments"
  })

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
              Payments
            </li>
          </ol>
        </nav>

        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h1 className="mb-4">Payments</h1>
            <p className="lead">This feature is coming soon!</p>
            <img
              src={require("../imgs/Logo.png")}
              alt="Coming Soon"
              className="img-fluid"
              width={"75%"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameStationPayment;
