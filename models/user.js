const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default; 
//default is for getting the function, otherwise it will send an object.

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);