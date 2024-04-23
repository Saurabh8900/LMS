const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL);

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    issuedBooks: [{
        bookName: String,
    }],
    numberOfIssuedBooks: Number,
    signedIn: Boolean
});

const User = new mongoose.model("User", userSchema);

module.exports = User;