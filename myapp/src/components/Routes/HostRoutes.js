import React from "react";
import { Routes, Route } from "react-router-dom";
import HostHome from "../host/HostHome";
import HostLogin from "../host/HostLogin";
import HostSignup from "../host/HostSignup";
import BookingsPage from "../host/BookingsPage";
import GameStationList from "../host/GameStationList";
import GameStationForm from "../host/GameStationForm";
import GameCatalogPage from "../host/GameCatalogPage";
import HostSidebar from "../host/HostSidebar";
import NoPage from "../User/NoPage";
import GsDetails from "../admin/GsDetails";
import GameStationProfile from "../host/GameStationProfile";
import GameStationSidebar from "../host/GameStationSidebar";
import GameStationGames from "../host/GameStationGames";
import GameStationBookings from "../host/GameStationBookings";
import GameStationPayment from "../host/GameStationPayment";
import HostForgotPassword from "../host/HostForgotPassword";
import HostOtpVerification from "../host/HostOtpVerification";
import HostResetPassword from "../host/HostResetPassword";
import Demo from "../host/Demo";
import PrivateRoute from "../host/PrivateRoute";
import GsTiming from "../host/GsTiming";

const HostRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="demo" element={<Demo />} />
        <Route path="login" element={<HostLogin />} />
        <Route path="signup" element={<HostSignup />} />
        <Route path="forgotpassword" element={<HostForgotPassword />} />
        <Route path="otpVerification" element={<HostOtpVerification />} />
        <Route path="reset-password" element={<HostResetPassword />} />

        <Route
          path="*"
          element={
            <PrivateRoute>
              <HostSidebar />
            </PrivateRoute>
          }
        >
          <Route index element={<GameStationList />} />
          <Route path="gameStations" element={<GameStationList />} />
          <Route path=":hostId/home" element={<HostHome />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="addGameStation" element={<GameStationForm />} />
          <Route path="sidebar" element={<HostSidebar />} />
          <Route path="*" element={<NoPage />} />
          <Route path="gs" element={<GsDetails />} />
        </Route>

        <Route
          path="gameStation/*"
          element={
            <PrivateRoute>
              <GameStationSidebar />
            </PrivateRoute>
          }
        >
          <Route path=":stationId" element={<GameStationProfile />} />
          <Route path=":stationId/addTiming" element={<GsTiming />} />
          <Route path=":stationId/bookings" element={<GameStationBookings />} />
          <Route path=":stationId/games" element={<GameStationGames />} />
          <Route path=":stationId/addGames" element={<GameCatalogPage />} />
          <Route path=":stationId/payments" element={<GameStationPayment />} />
        </Route>
      </Routes>
    </>
  );
};

export default HostRoutes;
