const User = require('../models/user.model');

const createUser = async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, password });
    user.save();
    res.json({ message: "User Created Successfully!" });

};

module.exports = { createUser };