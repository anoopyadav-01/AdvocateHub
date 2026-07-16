const Client = require("../models/Client");

exports.getClientData = async (req, res) => {
  try {
    const client = await Client.findOne({
      email: req.session.user.email,
    });

    if (!client) {
      return res.status(404).json({
        message: "Client not found",
      });
    }

    res.json(client);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateClientData = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    const client = await Client.findOneAndUpdate(
      { email: req.session.user.email },
      { name, email, phone },
      { new: true },
    );

    res.json({
      success: true,
      message: "Profile updated successfully",
      client,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
