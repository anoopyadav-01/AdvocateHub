const Lawyer = require("../models/Lawyer");
const transporter = require("../config/mailConfig");

exports.sendAcceptanceEmail = async (req, res) => {
  try {
    const { clientEmail, enrollmentId } = req.body;

    const lawyer = await Lawyer.findOne({
      enrollmentId,
    });

    if (!lawyer) {
      return res.status(404).json({
        message: "Lawyer not found",
      });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: clientEmail,
      subject: "🎉 Your Lawyer Contact Request Has Been Accepted!",
      html: `
      <h2>Great News!</h2>
      <p>Your request has been accepted.</p>

      <h3>Lawyer Details</h3>

      <p><strong>Name:</strong> ${lawyer.name}</p>
      <p><strong>Email:</strong> ${lawyer.email}</p>
      <p><strong>Phone:</strong> ${lawyer.phone}</p>
      <p><strong>Practice Area:</strong> ${lawyer.practiceArea}</p>
      <p><strong>Experience:</strong> ${lawyer.experience} years</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      message: "Email sent successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.sendRejectionEmail = async (req, res) => {
  try {
    const { clientEmail, enrollmentId } = req.body;

    const lawyer = await Lawyer.findOne({
      enrollmentId,
    });

    if (!lawyer) {
      return res.status(404).json({
        message: "Lawyer not found",
      });
    }

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: clientEmail,
      subject: "⚠️ Lawyer Contact Request Declined",
      html: `
      <h2>Request Declined</h2>

      <p>
      Unfortunately your request to contact
      ${lawyer.name} was declined.
      </p>

      <p>
      Please browse other available lawyers.
      </p>
      `,
    });

    res.json({
      message: "Rejection email sent successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
