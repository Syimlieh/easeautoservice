import nc from "next-connect";
import onError from "helpers/Error/errorMiddleware";
import dbConnect from "lib/dbConnect";
import Users from "model/Users";
import { hashing } from "helpers/hashing";

const handler = nc(onError);

handler.post(async (req, res) => {
  try {
    await dbConnect()
      .then(() => {
        console.log("asfdasdf");
      })
      .catch((error) => {
        console.log("errorsss" + error);
        console.log("errorsss" + error.message);
      });
    const { firstName, lastName, email, phoneNumber, password } = req.body;
    let user = await Users.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    console.log(req.body);
    let hashPassword = await hashing(password);
    console.log(hashPassword);
    Users.create(
      { firstName, lastName, email, phoneNumber, password: hashPassword },
      function (err, data) {
        if (err) {
          return res.status(400).json({
            success: false,
            message: "Error: sdsd " + err.message,
          });
        }
        res.status(200).json({
          success: true,
          message: "User Registered Successfully",
          user: data,
        });
      }
    );
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.res,
    });
  }
});

export default handler;
