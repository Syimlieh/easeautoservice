import nc from "next-connect";
import onError from "helpers/Error/errorMiddleware";
import dbConnect from "lib/dbConnect";
import Brands from "model/Brands";

const handler = nc(onError);

handler.get(async (req, res) => {
  try {
    await dbConnect()
      .then(() => {
        console.log("Database connection");
      })
      .catch((error) => {
        console.log("errorsss" + error);
        console.log("errorsss" + error.message);
      });
    const brand = await Brands.find();

    res.status(200).json({
      success: true,
      message: "Fetch All Brand Successfully",
      data: brand,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
});

export default handler;
