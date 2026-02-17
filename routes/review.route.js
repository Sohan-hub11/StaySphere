const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview, isloggedin, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/review.controller.js");

//Create Review Route.
router.post("/", isloggedin, validateReview, wrapAsync( reviewController.createReview)
);

//Delete Review Route.
router.delete("/:reviewId", isloggedin, isReviewAuthor, wrapAsync( reviewController.deleteReview)
);

module.exports = router;