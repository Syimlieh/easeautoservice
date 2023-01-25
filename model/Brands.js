import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      require: [true, "Brand is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Brands || mongoose.model("Brands", brandSchema);
