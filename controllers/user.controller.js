const User = require("../models/user.js");

module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signUp = async (req, res) => {
  try{
    let {username, email, password} = req.body;
    const newUser = new User({username, email});
    const registeredUser = await User.register(newUser, password);

    req.login(registeredUser, (err) => {
      if(err){
        return next();
      }
      req.flash("success", "Welcome to StaySphere!");
      res.redirect("/listings");
    });

    } catch(e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.logIn = async (req, res) => {
    req.flash("success", "Welcome back to StaySphere!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logOut = (req, res, next) => {
  req.logout((err) => {
    if(err){
      return next();
    }
    req.flash("success", "You are Succesfully Logged Out");
    res.redirect("/listings");
  });
};