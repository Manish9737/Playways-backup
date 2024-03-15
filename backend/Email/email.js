const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, content) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.Email,
        pass: process.env.PasswordEmail,
      },
    });

    const mailOptions = {
      from: process.env.Email,
      to,
      subject,
      html: content,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;
