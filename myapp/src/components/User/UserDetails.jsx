import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem("token");
    axios.get('/users/details',{
        headers: {
    Authorization: `Bearer ${authToken}`,
  },
    })
    
      .then((response) => {
        const userData = response.data;
        setUser(userData);
        setBirthdate(userData.birthdate ? new Date(userData.birthdate).toLocaleDateString() : '');
        setAddress(userData.address || '');
        setGender(userData.gender || '');

        // Set the default avatar image if no user image is available
        if (userData.userImage && userData.userImage.data) {
          const imageBlob = new Blob([new Uint8Array(userData.userImage.data).buffer], { type: userData.userImage.contentType });
          setImagePreview(URL.createObjectURL(imageBlob));
        } else {
          setImagePreview(require('../imgs/Profile_avatar4.png')); // Provide the path to your default avatar image
        };

                // Calculate and set age based on birthdate
                if (userData.birthdate) {
                  const birthdateDate = new Date(userData.birthdate);
                  const today = new Date();
                  const ageDiff = today - birthdateDate;
                  const ageDate = new Date(ageDiff);
                  setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
                }

      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  }, []);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setUserImage(selectedImage);
    setImagePreview(URL.createObjectURL(selectedImage));
  };

  const handleUpdate = () => {
    const formData = new FormData();
    if (userImage) {
      formData.append('userImage', userImage);
    }
    formData.append('birthdate', birthdate);
    formData.append('address', address);
    formData.append('gender', gender);

    axios.post('/users/update-details', formData)
      .then((response) => {
        if (response.status === 200) {
          console.log('User details updated successfully');
          navigate('/profile')
        }
      })
      .catch((error) => {
        console.error('Error updating user details:', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 display-5 text-center"> Upload User Details</h2>
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="mb-3 imgg">
            <img src={imagePreview} alt="User" className="img-fluid border rounded-circle ratio ratio-1x1" />
            <input type="file" accept="image/*" onChange={handleImageChange} className="form-control mt-2" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={user.name || ''}
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone:</label>
            <input
              type="text"
              id="phone"
              className="form-control"
              value={user.phone || ''}
              disabled
            />
          </div>
          <div className="mb-3">
            <label htmlFor="birthdate" className="form-label">Birthdate:</label>
            <input
              type="date"
              id="birthdate"
              className="form-control"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
          <label htmlFor="age" className="form-label">Age:</label>
          <input
            type="text"
            id="age"
            className="form-control"
            value={age}
            readOnly // Make it read-only
          />
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address:</label>
            <textarea
              id="address"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">Gender:</label>
            <select
              id="gender"
              className="form-select"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
