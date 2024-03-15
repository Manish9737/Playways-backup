import React, { useEffect, useState } from "react";
import logoPlaceholder from "../imgs/Logo.png";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import hostApis from "../apis/HostApis";

const GameStationForm = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [gameStationData, setGameStationData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    latitude: "",
    longitude: "",
    gsLogo: null,
    logoPreview: logoPlaceholder,
    hostId: localStorage.getItem("hostId"),
    error: "",
    country: "",
    state: "",
    city: "",
  });
  // const hostId = localStorage.getItem("hostId");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await hostApis.getCountries();
        setCountries(response.data.countries);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await hostApis.getStates();
        setStates(response.data.states);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await hostApis.getCities();
        setCities(response.data.cities);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCities();
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setGameStationData({
      ...gameStationData,
      country: selectedCountry,
      state: "",
      city: "",
    });
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setGameStationData({
      ...gameStationData,
      state: selectedState,
      city: "",
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          setGameStationData({
            ...gameStationData,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        function (error) {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, [gameStationData, setGameStationData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGameStationData(prevState => ({
      ...prevState,
      [name]: value,
      error: "",
    }));
  };

  const handleLogoChange = (e) => {
    const logoFile = e.target.files[0];
    setGameStationData({
      ...gameStationData,
      gsLogo: logoFile,
      logoPreview: URL.createObjectURL(logoFile),
      error: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("host", gameStationData.hostId);
    formData.append("name", gameStationData.name);
    formData.append("email", gameStationData.email);
    formData.append("phone", gameStationData.phone);
    formData.append("city", gameStationData.city);
    formData.append("state", gameStationData.selectedState);
    formData.append("country", gameStationData.selectedCountry);
    formData.append("latitude", parseFloat(gameStationData.latitude));
    formData.append("longitude", parseFloat(gameStationData.longitude));
    formData.append("address", gameStationData.address);
    formData.append("gsLogo", gameStationData.gsLogo);

    try {
      console.log(gameStationData);
      const response = await hostApis.addGameStation(formData);

      if (response.data.success) {
        console.log("Game Station added successfully");
        navigate("/host/gameStations");
        setGameStationData({
          name: "",
          email: "",
          phone: "",
          city: "",
          selectedState: "",
          selectedCountry: "",
          latitude: "",
          longitude: "",
          address: "",
          gsLogo: null,
          logoPreview: logoPlaceholder,
          error: "",
        });
        console.log(gameStationData);
      } else {
        console.error("Failed to add Game Station");
        setGameStationData({
          ...gameStationData,
          error: "Failed to add Game Station",
        });
      }
    } catch (error) {
      console.error("Error:", error);

      if (error.response) {
        console.error("Error response from server:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Request error:", error.message);
      }

      setGameStationData({
        ...gameStationData,
        error: "Error adding Game Station",
      });
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="card m-md-3 mt-lg-5 mb-lg-5 shadow-lg">
          <div className="card-body">
            <h2 className="text-center display-5 mb-5">Add Game Station</h2>
            {gameStationData.error && (
              <p className="text-danger text-center">{gameStationData.error}</p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="container ">
                <div className="row">
                  <div className="col-md-5 d-flex justify-content-center align-items-center">
                    <div className="mb-3">
                      <p
                        className="text-center h2"
                        style={{ fontFamily: "joseph" }}
                      >
                        Logo
                      </p>

                      {/* Display logo preview */}
                      {gameStationData.logoPreview && (
                        <label
                          htmlFor="logoInput"
                          className="d-block cursor-pointer"
                        >
                          <div className="mt-4">
                            <img
                              src={
                                gameStationData.logoPreview || logoPlaceholder
                              }
                              alt="Logo Preview"
                              className="img-fluid mb-3 rounded-circle border"
                              width={window.innerWidth < 768 ? "150" : "300"}
                              style={{
                                aspectRatio: "1/1",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </label>
                      )}

                      <input
                        type="file"
                        className="form-control w-100 visually-hidden"
                        accept="image/*"
                        onChange={handleLogoChange}
                        id="logoInput"
                      />
                    </div>
                  </div>

                  <div className="col-md-7">
                    <div className="mb-2">
                      <label className="form-label">Game Station Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={gameStationData.name}
                        onChange={(e) => handleInputChange(e)}
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label">Email:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        value={gameStationData.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label">Phone:</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={gameStationData.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label className="form-label">Country:</label>
                      <select
                        name="country"
                        className="form-select"
                        onChange={handleCountryChange}
                        value={gameStationData.country}
                      >
                        <option value="" disabled>
                          Select the Country
                        </option>
                        {countries.map((country) => (
                          <option key={country._id} value={country.countryName}>
                            {country.countryName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-2">
                      <label className="form-label">State:</label>
                      <select
                        name="state"
                        className="form-select"
                        onChange={handleStateChange}
                        disabled={!gameStationData.country}
                        value={gameStationData.state}
                      >
                        <option value="" disabled>
                          Select the State
                        </option>

                        {states.map((state) => (
                          <option key={state._id} value={state.stateName}>
                            {state.stateName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-2">
                      <label className="form-label">City:</label>
                      <select
                        name="city"
                        className="form-select"
                        onChange={handleInputChange}
                        disabled={!gameStationData.state}
                        value={gameStationData.city}
                      >
                        <option value="" disabled>
                          Select the City
                        </option>
                        {cities.map((city) => (
                          <option key={city._id} value={city.cityName}>
                            {city.cityName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="mb-2">
                      <label className="form-label">Address:</label>
                      <textarea
                        type="text"
                        className="form-control"
                        name="address"
                        value={gameStationData.address}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* <div className="mb-2">
                      <label className="form-label">Latitude:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="latitude"
                        value={gameStationData.latitude}
                        onChange={handleInputChange}
                        disabled
                      />
                    </div>
                    <div className="mb-2">
                      <label className="form-label">Longitude:</label>
                      <input
                        type="number"
                        className="form-control"
                        name="longitude"
                        value={gameStationData.longitude}
                        onChange={handleInputChange}
                        disabled
                      />
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="text-center mt-5 mb-3">
                <button type="submit" className="btn btn-primary">
                  Add Game Station
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameStationForm;
