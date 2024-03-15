var express = require("express");
const upload = require("../../middlewares/singleFileUpload");
const {
  registerUser,
  loginUser,
  deleteUser,
  allUsers,
  uploadImg,
  forgotPassword,
  resetPassword,
  userDetails,
  updateProfile,
  fetchOTP,
  contactUs,
  findGameStationById,
} = require("../../controller/users/userController");
var router = express.Router();

require("dotenv").config();

router.post("/register", registerUser); // Register new User
router.post("/login", loginUser); // login User
router.get("/details/:id", userDetails); // User Details
router.put("/update/:id", upload("images").single("ProfileImg"), updateProfile); // Update User Profile
router.post("/forgot-password", forgotPassword); // Forgot User password
router.post("/reset-password", resetPassword); // Reset User password
router.post("/fetchOtp", fetchOTP); // fetch otp
router.delete("/delete/:id", deleteUser); // Delete User
router.get("/allUsers", allUsers); // All Users
router.post("/upload/:id", upload("images").single("image"), uploadImg); // upload Profileimage
router.post("/contactUs", contactUs); // Contact Us
// router.get("/gameStation/:id", findGameStationById); // Contact Us

module.exports = router;
