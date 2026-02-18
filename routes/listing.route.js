const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {isloggedin, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listing.controller.js");
const multer  = require('multer')
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//Index Route
//Create Route
router.route("/")
.get( wrapAsync (listingController.index))
 .post( validateListing, isloggedin, isOwner, upload.single("listing[image]"), wrapAsync( listingController.createListing)
 );

//New Route
router.get("/new", isloggedin, listingController.renderNewForm);



//Show Route
//Update Route
//Delete Route
router.route("/:id")
.get( wrapAsync( listingController.showListing)
)
.put( validateListing, isloggedin, isOwner, wrapAsync( listingController.updateListing)
)
.delete( isloggedin, isOwner, wrapAsync( listingController.deleteListing)
);


//Edit Route
router.get("/:id/edit", isloggedin, isOwner, wrapAsync( listingController.renderEditForm)
);


module.exports = router;