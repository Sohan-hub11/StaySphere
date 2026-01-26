const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  image: {
  url: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?w=600&auto=format&fit=crop&q=60",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1610147323479-a7fb11ffd5dd?w=600&auto=format&fit=crop&q=60"
        : v
  },
  filename: {
    type: String,
    default: "listingimage"
  }
},

  price: Number,
  location: String,
  country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;