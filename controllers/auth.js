import { UserModel } from "../models/index.js";
import { hashPassword } from "../lib/index.js";
import { createError, compareHashPassword } from "../lib/index.js";

const register = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const newUser = new UserModel({
    userName,
    email,
    password: hashPassword(password),
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json({ message: `user has beeen created` });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ userName: req.body.userName });
    if (!user) {
      next(createError(404, "User not found"));
    }
    const isPasswordValid = await compareHashPassword(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      next(createError(400, "Wrong password or username"));
    }
    const { password, isAdmin, ...otherDetails } = user._doc;
    res.status(200).json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};

export { register, login };
