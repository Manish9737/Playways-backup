var express = require("express");
var router = express.Router();
const passport = require("passport"); 
const {
  registerHost,
  loginHost,
  getHosts,
  updateHost,
  deleteHost,
  logOut,
  forgotPassword,
  resetPassword,
  fetchOTP,
} = require("../../controller/host/hostController");
const setupGoogleStrategy = require("../../middlewares/googleStrategy");

require("dotenv").config();
setupGoogleStrategy(passport);

router.post("/register", registerHost); // register route

router.post("/login", loginHost); // Login route

router.put("/update/:id", updateHost); // Route to update a Host's data

router.delete("/delete/:id", deleteHost); // Route to delete a Host

router.get("/getHosts", getHosts); // Get all hosts

router.get("/logout", logOut); // Logout Host route

router.post("/forgot-password", forgotPassword); // Login route

router.post("/reset-password", resetPassword); // Login route

router.post("/fetchOtp", fetchOTP); // Login route



// router.get('/auth/google', async (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // Set the correct origin
//   passport.authenticate('google-login', {
//     scope: ['profile', 'email'] // Define the required scope here
//   })(req, res);
// });

// router.get('/auth/google/callback', passport.authenticate('google-login', {
//   successRedirect: 'http://localhost:3000/host/home', // Redirect to home upon successful authentication
//   failureRedirect: 'http://localhost:3000/host/login', // Redirect to login page on failure
// }));

// // Protected route example - Requires authentication
// router.get('/protected', (req, res, next) => {
//   if (req.isAuthenticated()) {
//     // If authenticated, proceed with the request
//     res.json({ message: 'Access granted to protected route', user: req.user });
//   } else {
//     // If not authenticated, respond with an error
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// });

module.exports = router;
