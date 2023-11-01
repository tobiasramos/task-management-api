const User = require("../model/User");

module.exports = {
  async registerUser(req, res) {
    const { email, password, repeat_password } = req.body;

    if (password !== repeat_password) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
      const newUser = await User.create({ email, password });
      return res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Failed to create a user", message: error.message });
    }
  },
};
