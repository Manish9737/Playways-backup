import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import userApis from "../apis/UserApis";

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [randomQuote, setRandomQuote] = useState("");
  const [randomQuoteAuthor, setRandomQuoteAuthor] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,}$/;
    return passwordPattern.test(password);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmailOrPhone(emailValue);
    setIsEmailValid(validateEmail(emailValue));
    if (!validateEmail(emailValue)) {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "";
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    setIsPasswordValid(validatePassword(passwordValue));
    if (!validatePassword(passwordValue)) {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "";
    }
  };

  // quotes
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await userApis.getQuotes();

        if (response.status === 200) {
          const randomIndex = Math.floor(
            Math.random() * response.data.quotes.length
          );
          setRandomQuote(response.data.quotes[randomIndex].quote);
          setRandomQuoteAuthor(
            response.data.quotes[randomIndex].name || "Unknown"
          );
        } else {
          console.error("Failed to fetch quotes");
        }
      } catch (error) {
        console.error("Failed to fetch quotes:", error.message);
      }
    };

    fetchQuotes();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (isEmailValid && isPasswordValid) {
      try {
        const response = await userApis.login(emailOrPhone, password);

        if (response.status === 200) {
          const userId = response.data.user._id;
          localStorage.setItem("userId", userId);
          setSuccessMessage(response.data.message);
          setErrorMessage("");
          navigate("/");
        } else {
          if (response.status === 401) {
            setErrorMessage("Invalid email or password. Please try again.");
          } else {
            setErrorMessage(
              "An error occurred while logging in. Please try again."
            );
          }
        }
      } catch (error) {
        console.error("Login failed:", error.message);
        setErrorMessage(
          "An error occurred while logging in. Please try again."
        );
        setSuccessMessage("");
      }
    } else {
      setErrorMessage("Please enter a valid email and password.");
      setSuccessMessage("");
    }
  };

  setTimeout(() => {
    setErrorMessage("");
    // setSuccessMessage("");
  }, 5000);

  return (
    <>
      <section className="">
        <div
          className="px-4 py-5 px-md-5 text-center text-lg-start"
          style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center ">
              <div className="col-lg-6 mb-5 mb-lg-0 text-center">
                <img
                  src={require("../imgs/Logo1.png")}
                  alt="Logo"
                  id="logo"
                  className="mx-auto img-fluid "
                  style={{ width: "50%" }}
                />
                <p className="h5 text-start mt-2">{randomQuote}</p>
                <h2 className="text-end h5 text-secondary">
                  - {randomQuoteAuthor}
                </h2>
              </div>

              <div className="col-lg-6 mb-5 mb-lg-0">
                <div className="card">
                  <div className="card-body py-5 px-md-5 text-start ">
                    <h2
                      className="display-6 text-center text-warning mb-4 fw-bold"
                      style={{ fontFamily: "joseph" }}
                    >
                      Log In
                    </h2>

                    {/* error & success msg */}
                    {errorMessage && (
                      <div className="alert alert-danger ">{errorMessage}</div>
                    )}
                    {successMessage && (
                      <p classNameName="alert alert-success">
                        {successMessage}
                      </p>
                    )}

                    {/* form */}
                    <form className="" onSubmit={handleLogin}>
                      {/* Email input */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">
                          Email address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="example@gmail.com"
                          autoComplete="email"
                          value={emailOrPhone}
                          onChange={handleEmailChange}
                          required
                        />
                      </div>

                      {/* Password input */}
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form3Example4">
                          Password
                        </label>
                        <input
                          type={showPassword ? "text" : "password"}
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                          autoComplete="password"
                          value={password}
                          onChange={handlePasswordChange}
                          required
                        />
                      </div>

                      <div className="text-end form-outline mb-3">
                        <input
                          id="showPassword"
                          type="checkbox"
                          className="form-check-input"
                          onClick={togglePasswordVisibility}
                        />
                        <label
                          htmlFor="showPassword"
                          className="input-label mb-2 ms-1"
                        >
                          Show Password
                        </label>
                      </div>

                      {/* Submit button */}
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-block btn-lg w-100"
                          id="logIn"
                        >
                          Log in
                        </button>
                      </div>

                      {/* Register buttons */}
                      <div className="text-center mb-">
                        <p className="hrline">or</p>
                        <div className="d-flex justify-content-center align-items-center">
                          {/* Icons in a row */}
                          <div className="">
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <img
                                src={require("../imgs/google.png")}
                                alt=""
                                className="login-icon"
                                // width={"20%"}
                              />
                            </button>
                          </div>

                          <div className="">
                            <button
                              type="button"
                              className="btn btn-link btn-floating mx-1"
                            >
                              <img
                                src={require("../imgs/facebook.png")}
                                alt=""
                                className="login-icon"
                                // width={"20%"}
                              />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Link to SignUp */}
                      <div className="">
                        <Link className="btn w-100" to={"/signup"}>
                          Create a new Account?
                          <span className="text-primary">Register</span>
                        </Link>
                      </div>

                      <div className="form-outline">
                        {/* Forgot password */}
                        <div className="text-lg-center">
                          <Link
                            to={"/forgotpassword"}
                            className="text-secondary text-decoration-none"
                          >
                            Forgot password
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
