// ProfilePage.js
import React, { useContext } from "react";
import {
  FaBirthdayCake,
  FaPhoneAlt,
  FaCalendar,
  FaAddressCard,
  FaAt,
  FaVenusMars,
} from "react-icons/fa";
// import axios from "axios";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function ProfilePage() {
  const userId = localStorage.getItem("userId");
  


  const { user } = useContext(UserContext);

  return (
    <div className="container-fluid" id="bg">
      <div className="bg-image m-4 card shadow bg-golden" >
        <h2
          className="mb-4 display-5 text-center text-white "
        >
          User Details
        </h2>

        <div className="">
          <div className="">
            <div className="row m-2">
              <div className="col-md-4  d-flex justify-content-center align-items-center">
                <div className="mb-5 d-flex align-items-center justify-content-center imgg p-2">
                  <img
                    src={
                      user?.ProfileImg || require("../imgs/Profile_avatar4.png")
                    }
                    alt="User"
                    className="img-fluid rounded-circle ratio ratio-1x1 object-fit-cover shadow "
                    // width={window.innerWidth < 768 ? "150" : "200"}
                  />
                </div>
              </div>
              <div className="col-md-8 ">
                <div className=" p-3">
                  <div className="">
                    <div className="mb-5">
                      <h2
                        className="fs-1"
                        // style={{ fontFamily: "joseph" }}
                      >
                        {user?.userName || "User"}
                      </h2>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        <FaAt style={{ fontSize: "30px" }} /> :{" "}
                        {user?.email || "Email"}
                      </label>
                      {/* <input
              type="text"
              id="phone"
              className="form-control"
              value={userData.phone || ""}
              readOnly
            /> */}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        <FaPhoneAlt style={{ fontSize: "30px" }} /> :{" "}
                        {user?.phone || "Phone"}
                      </label>
                      {/* <input
              type="text"
              id="phone"
              className="form-control"
              value={userData.phone || ""}
              readOnly
            /> */}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="birthdate" className="form-label">
                        <FaBirthdayCake style={{ fontSize: "30px" }} /> :{" "}
                        {user?.birthdate || "24-12-2003"}
                      </label>
                      {/* <input
              type="text"
              id="birthdate"
              className="form-control"
              value={userData.birthdate || ""}
              readOnly
            /> */}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="age" className="form-label">
                        <FaCalendar style={{ fontSize: "30px" }} /> :{" "}
                        {user?.age || "20"}
                      </label>
                      {/* <input
            type="text"
            id="age"
            className="form-control"
            value={userData.age || ""}
            readOnly
          /> */}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        <FaAddressCard style={{ fontSize: "30px" }} /> :{" "}
                        {user?.address || "Address"}
                      </label>
                      {/* <textarea
              id="address" 
              className="form-control"
              value={userData.address || ""}
              readOnly
            ></textarea> */}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="gender" className="form-label">
                        <FaVenusMars style={{ fontSize: "30px" }} /> :{" "}
                        {user?.gender || "Gender"}
                      </label>
                      {/* <input
              type="text"
              id="age"
              className="form-control"
              value={userData.gender || ""}
              readOnly
            /> */}
                    </div>

                    <div className="text-center mx-auto">
                      <Link
                        to={`/edit-profile/${userId}`}
                        className="btn btn-light"
                      >
                        Edit Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProfilePage;
