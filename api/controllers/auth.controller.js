import { catchAsyncErrors, ErrorHandler } from "../middlewares/error.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = catchAsyncErrors(async (req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);

  await User.create({
    username,
    email,
    password: hashedPassword,
  });

  res.status(201).json({
    success: true,
    message: "Signup successfully",
  });
});
