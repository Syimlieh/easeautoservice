import mongoose from "mongoose";
import validate from "validator";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: [true, "username is required for a new user"],
      trim: true,
    },
    lastName: {
      type: String,
      require: [true, "username is required for a new user"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      validate: [validate.isEmail, "Please Enter valid Email Address"],
    },
    phoneNumber: {
      type: Number,
      require: [true, "Phone number is required for a new user"],
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
      minLength: [8, "Please Enter at Least 8 Character"],
      select: false,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot contain "password"');
        }
      },
    },
  },
  {
    timestamps: true,
  }
);

// UserSchema.pre("validate", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   console.log("pre");
//   this.password = await bcrypt.hash(this.password, 10);
// });

// UserSchema.methods.comparePassword = function (password) {
//   return bcrypt.compare(password, this.password);
// };

module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
