import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../User/Home";
import Demo from "../User/Demo";
import Login from "../User/Login";
import SignUp from "../User/SignUp";
import BookingInterface from "../User/BookingInterface";
import PaymentGateway from "../User/PaymentGateway";
import ForgotPassword from "../User/ForgotPassword";
import ResetPassword from "../User/ResetPassword";
import UserDetails from "../User/UserDetails";
import ProfilePage from "../User/ProfilePage";
import EditProfilePage from "../User/EditProfilePage";
import FAQPage from "../User/FAQPage";
import TermsAndConditions from "../User/TermsAndConditions";
import NoPage from "../User/NoPage";
import FeedbackPage from "../User/FeedbackPage";
import OtpVerification from "../User/OtpVerification";
import ContactUs from "../User/ContactUs";
import GameStations from "../User/GameStations";
import GsProfile from "../User/GsProfile";
import AboutUs from "../User/AboutUs";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/update-details" element={<UserDetails />} />
      <Route path="/edit-profile/:userId" element={<EditProfilePage />} />
      <Route path="/gameStations" element={<GameStations />} />
      <Route path="/gameStation/:stationId" element={<GsProfile />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/otpVerification" element={<OtpVerification />} />
      <Route path="/bookingInterface" element={<BookingInterface />} />
      <Route path="/paymentGateway" element={<PaymentGateway />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/FAQs" element={<FAQPage />} />
      <Route path="/T&C" element={<TermsAndConditions />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default UserRoutes;
