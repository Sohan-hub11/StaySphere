const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/user.controller.js");

// SignUp
router.route("/signup")
.get( userController.renderSignupForm)
.post( wrapAsync( userController.signUp)
);

// Login
router.route("/login")
.get( userController.renderLoginForm)
.post( saveRedirectUrl, passport.authenticate('local', {failureRedirect: '/login', failureFlash: true}), 
  wrapAsync( userController.logIn));

// LogOut
router.get("/logout", userController.logOut);

module.exports = router;