import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../admin/Dashboard";
import GsDetails from "../admin/GsDetails";
import NoPage from "../User/NoPage";
import AdminSidebar from "../admin/AdminSidebar";
import Bookings from "../admin/Bookings";
import AdminLogin from "../admin/AdminLogin";
import Quotes from "../admin/Quotes";
import Users from "../admin/Users";
import Games from "../admin/Games";
import Feedbacks from "../admin/Feedbacks";
import Payments from "../admin/Payments";
import Hosts from "../admin/Hosts";
import HostStations from "../admin/HostStations";
import GameStationProfile from "../admin/GameStationProfile";
import "../Assets/CSS/Admin.css";
import PrivateRoute from "../admin/PrivateRoutes";
import PasswordChange from "../admin/PasswordChange";
import Admins from "../admin/Admins";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<AdminLogin />} />
        <Route path=":adminId/changePassword" element={<PasswordChange />} />

        <Route
          path="*"
          element={
            <PrivateRoute>
              <AdminSidebar />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path=":adminId/admins" element={<Admins />} />
          <Route path=":adminId/hosts" element={<Hosts />} />
          <Route path=":adminId/hosts/:hostId" element={<HostStations />} />
          <Route
            path=":adminId/station/:stationId"
            element={<GameStationProfile />}
          />
          <Route path=":adminId/dashboard" element={<Dashboard />} />
          <Route path=":adminId/feedbacks" element={<Feedbacks />} />
          <Route path=":adminId/payments" element={<Payments />} />
          <Route path=":adminId/quotes" element={<Quotes />} />
          <Route path=":adminId/games" element={<Games />} />
          <Route path=":adminId/users" element={<Users />} />
          <Route path=":adminId/bookings" element={<Bookings />} />
          <Route path=":adminId/gameStations" element={<GsDetails />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
