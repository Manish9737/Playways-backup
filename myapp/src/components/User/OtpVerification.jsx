import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userApis from "../apis/UserApis";

const OtpVerification = () => {
  const [OTP, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate('/forgotpassword')
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { value } = e.target;
    if (/^[0-9]{0,6}$/.test(value)) {
      setOtp(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (OTP.length === 6) {
      try {
        const response = await userApis.fetchOtp(email, OTP);
        if (response.status === 200) {

          setSuccess("OTP verification successful.");
          localStorage.setItem("otp", OTP);
          
          setTimeout(() => {
            navigate("/reset-password");
          }, 1000);
        } else {
          setError("Failed to verify OTP. Please try again.");
        }
      } catch (error) {
        console.error("Failed to verify OTP:", error.message);
        setError("Failed to verify OTP. Please try again.");
      }
    } else {
      setError("Please enter a 6-digit OTP.");
    }
  };

  return (
    <div
      className="container mt-5 mb-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="col-md-5">
        <div className="card">
          <div className="card-body">
            <h2
              className="text-center mb-4 text-warning"
              style={{ fontFamily: "joseph" }}
            >
              OTP Verification
            </h2>

            {error && <div className="alert alert-danger mt-2">{error}</div>}
            {success && (
              <div className="alert alert-success mt-2">{success}</div>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formOtp">
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter OTP"
                  value={OTP}
                  onChange={handleChange}
                  maxLength={6}
                  required
                />
              </Form.Group>
              <div className="text-center mt-3">
                <Button variant="btn" type="submit" id="logIn">
                  Verify OTP
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
