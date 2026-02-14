const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require('ejs-mate');
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");

const listings = require("./routes/listing.route.js");
const reviews = require("./routes/review.route.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/staysphere"

main().then(() => {
  console.log("connected to DB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.send("This is my root");
});



//Listings.
app.use("/listings", listings);

//Reviews
app.use("/listings/:id/reviews", reviews);

// app.get("/testlisting", async(req, res) => {
//   let sampleListing = new Listing ({
//     title: "My Home",
//   description: "Home home sweet home",
//   price: 10000000,
//   location: "Howrah",
//   country: "India"
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("Success");
// });

app.use((err, req, res, next) => {
  let {statusCode = 500, message = "Something went Wrong"} = err;
  res.status(statusCode).render("error.ejs", {message});
  // res.status(statusCode).send(message);
});

app.listen(8080, () => {
  console.log("App is listening on Port 8080");
})