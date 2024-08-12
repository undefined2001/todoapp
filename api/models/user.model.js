const mongoose = require('./db');
const bcrypt = require('bcrypt');

// Define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String },
    created_at: { type: Date, default: Date.now }
});


// Create the User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User; // Export the model for use in other parts of your application
