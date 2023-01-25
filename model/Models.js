import mongoose from "mongoose";

const modelSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      require: [true, "Model is required"],
    },
  },
  {
    brand: {
      type: String,
      require: [true, "Brand is required"],
    },
  }
);

module.exports =
  mongoose.models.Models || mongoose.model("Models", modelSchema);
