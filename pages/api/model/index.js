import nc from "next-connect";
import onError from "helpers/Error/errorMiddleware";
import dbConnect from "lib/dbConnect";
import Models from "model/Models";

const handler = nc(onError);

handler.post(async (req, res) => {
  try {
    await dbConnect()
      .then(() => {
        console.log("Database connection");
      })
      .catch((error) => {
        console.log("errorsss" + error);
        console.log("errorsss" + error.message);
      });
    const { brand } = req.body;

    if (!brand) {
      return res.status(400).json({
        success: false,
        message: "Please enter a brand",
      });
    }
    const model = await Models.find({ car_brand: brand });

    res.status(200).json({
      success: true,
      message: "Fetch All Model with brand " + brand,
      data: model,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error,
    });
  }
});

export default handler;
