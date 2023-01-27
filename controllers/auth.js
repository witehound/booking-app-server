import { UserModel } from "../models/index.js";
import { hashPassword } from "../lib/index.js";
import {
  createError,
  compareHashPassword,
  createJwtToken,
} from "../lib/index.js";

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
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ userName: req.body.userName });
    if (!user) {
      return next(createError(404, "User not found"));
    }
    const isPasswordValid = await compareHashPassword(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return next(createError(400, "Wrong password or username"));
    }
    const { password, isAdmin, ...otherDetails } = user._doc;
    const token = createJwtToken(user._id, user.isAdmin);
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails });
  } catch (error) {
    next(error);
  }
};

export { register, login };
