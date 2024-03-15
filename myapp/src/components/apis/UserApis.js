import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_baseUrl;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const userApis = {
    login: (emailOrPhone, password) => axiosInstance.post('/users/login', {emailOrPhone, password}),
    register: (userName, email, phone, password) => axiosInstance.post('/users/register', {userName, email, phone, password}),
    getQuotes: () => axiosInstance.get('/quotes/getQuotes'),
    forgotPassword: (email) => axiosInstance.post('/users/forgot-password', {email}),
    fetchOtp: (email, OTP) => axiosInstance.post('/users/fetchOtp', {email, OTP}),
    resetPassword: ( email, otp, newPassword) => axiosInstance.post('/users/reset-password', {email, otp, newPassword}),
    getUserDetails: (userId) => axiosInstance.get(`/users/details/${userId}`),
    updateUserDetails: (userId) => axiosInstance.get(`/users/update/ ${userId}`),

    // user feedback
    submitFeedback: (formData) => axiosInstance.post('/feedback/submit', formData),

    // ContactUs
    contactUs: (name, email, subject, message) => axiosInstance.post(`/users/contactUs`, {name, email, subject, message}),

    // gameStations
    fetchGameStations: () => axiosInstance.get('/gameStation/allStations'),
    getGameStationData: (id) => axiosInstance.get(`/gameStation/${id}`),
    

};

export default userApis;
