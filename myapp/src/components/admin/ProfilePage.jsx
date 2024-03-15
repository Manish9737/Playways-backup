import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const ProfilePage = ({ user }) => {
  return (
    <div className="container mt-4">
      <h1>User Profile</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          <img
            src={user.imageSrc} // Make sure you have imageSrc in your user data
            className="img-fluid rounded"
            alt="User"
          />
        </div>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{user.userName}</h5>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Phone: {user.phone}</p>
              <p className="card-text">PrimeUser: {user.IsPrimeUser }</p>
              {/* Add more user details as needed */}
            </div>
          </div>
        </div>
      </div>
      <Link to="/admin/users" className="btn btn-primary mt-4">Back to Users</Link>
    </div>
  );
}

export default ProfilePage;
