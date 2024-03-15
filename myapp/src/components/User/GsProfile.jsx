import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userApis from "../apis/UserApis";
import Logo from "../imgs/Logo.png"

const GsProfile = () => {
  const { stationId } = useParams();
  const [stationData, setStationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    const fetchStationData = async () => {
      try {
        const response = await userApis.getGameStationData(stationId);
        setStationData(response.data.gameStation);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching game station data:", error);
        setLoading(false);
      }
    };

    fetchStationData();
  }, [stationId]);

  const toggleView = (view) => {
    if (view === "images") {
      setShowImages(true);
    } else if (view === "videos") {
      setShowImages(false);
    }
  };

  return (
    <>
      <div className="container mt-3">
        {loading ? (
          <p>Loading...</p>
        ) : (
          stationData && (
            <>
              <div className="row p-md-0 p-3">
                <div className="card bg-golden rounded-4 bg-opacity-50 shadow ">
                  <div className="card-body text-white">
                    <div className="row">
                      <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <div
                          className="bg-white rounded-circle"
                          style={{ userSelect: "none" }}
                        >
                          <img
                            src={
                              `${process.env.REACT_APP_baseUrl}${stationData.gsLogo}` ||
                              Logo
                            }
                            alt="Game Station Logo"
                            className="img-fluid rounded-circle border-dark border"
                            width={window.innerWidth < 768 ? "150" : "600"}
                            style={{ aspectRatio: "1/1", objectFit: "cover" }}
                          />
                        </div>
                      </div>
                      <div className="col-md-8 justify-content-center align-items-center d-flex">
                        <div className="row justify-content-center mt-3">
                          <div className="text-center">
                            <h1
                              className="fw-bolder text-uppercase"
                              style={{ userSelect: "none" }}
                            >
                              {stationData.name}
                            </h1>
                            <span style={{ userSelect: "none" }}>
                              {stationData.city}
                            </span>
                          </div>
                          <div className="row justify-content-center d-flex mt-md-5 mb-2 mt-3">
                            <div
                              className="col-6 text-center"
                              style={{ userSelect: "none" }}
                            >
                              <label className="fs-4" htmlFor="visits">
                                Viewers
                              </label>
                              <h5 className="text-uppercase" id="visits">
                                {stationData.viewers}
                              </h5>
                            </div>
                            <div
                              className="col-6 text-center"
                              style={{ userSelect: "none" }}
                            >
                              <label className="fs-4" htmlFor="status">
                                Status
                              </label>
                              <h5 className="text-uppercase" id="status">
                                {stationData.status}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12 text-center">
                  <button
                    className={`btn me-3 ${
                      showImages ? "btn-golden" : "btn-secondary"
                    }`}
                    onClick={() => toggleView("images")}
                  >
                    Images
                  </button>
                  <button
                    className={`btn ${
                      showImages ? "btn-secondary" : "btn-golden"
                    }`}
                    onClick={() => toggleView("videos")}
                  >
                    Videos
                  </button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  {showImages ? (
                    stationData.images && stationData.images.length > 0 ? (
                      <div className="image-container">
                        {stationData.images.map((image, index) => (
                          <img
                            key={index}
                            src={`${process.env.REACT_APP_baseUrl}${image}`}
                            alt="Iamges"
                            className="img-fluid"
                            width={window.innerWidth < 768 ? "150" : "300"}
                            style={{ aspectRatio: "1/1", objectFit: "cover" }}
                          />
                        ))}
                      </div>
                    ) : (
                      <p>No images available</p>
                    )
                  ) : stationData.videos && stationData.videos.length > 0 ? (
                    <div className="video-container w-100">
                      {stationData.videos.map((video, index) => (
                        <iframe
                          key={index}
                          src={`${process.env.REACT_APP_baseUrl}${video}`}
                          title={`Videos`}
                          width={window.innerWidth < 768 ? "290" : "600"}
                          height={window.innerWidth < 768 ? "150" : "280"}
                          frameBorder="0"
                          className="m-1"
                          allowFullScreen
                        ></iframe>
                      ))}
                    </div>
                  ) : (
                    <p>No videos available</p>
                  )}
                </div>
              </div>
            </>
          )
        )}
        {/* <ToastMessages
        show={toast.show}
        onClose={() => setToast({ ...toast, show: false })}
        type={toast.type}
        message={toast.message}
      /> */}
      </div>
    </>
  );
};

export default GsProfile;
