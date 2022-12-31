import { sendEmail } from "helpers/email";
import onError from "helpers/Error/errorMiddleware";
import nc from "next-connect";

const handler = nc(onError);

handler.post(async (req, res) => {
  try {
    const { email, name, subject, phoneNumber, message } = req.body;

    const response = await sendEmail(
      email,
      name,
      subject,
      phoneNumber,
      message
    );
    console.log(response);
    if (!response) {
      return res.status(500).json({ message: "Email not sent" });
    }

    res.status(200).json({
      success: false,
      message: "Thank for Contacting us",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

export default handler;
