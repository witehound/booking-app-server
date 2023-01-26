import { UserModel } from "../models/index.js";
import { hashPassword } from "../lib/index.js";

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

export { register, login };
